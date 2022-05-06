import React, { useState, useEffect } from 'react';
import ArticleInside from '~/components/elements/articles/ArticleInside';
import PostRepository from '~/repositories/PostRepository';

const BlogPostGridItemsInside = ({ collectionSlug, column }) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    async function getPosts() {
        let queries, APIPosts;
        if (collectionSlug !== '') {
            queries = {
                slug_eq: collectionSlug
            };
            APIPosts = await PostRepository.SPGetPostItemOfCollectionBySlug(queries);
        } else {
            queries = {
                _limit: 10
            };
            APIPosts = await PostRepository.getPosts(queries);
        }

        if (APIPosts) {
            setTimeout(function() {
                setLoading(false);
            }, 200);
            setPosts(APIPosts);
            return APIPosts;
        } else {
            setPosts(null);
            return null;
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    let viewPostItems;
    if (!loading && posts) {
        viewPostItems = posts.map(item => {
            if (column === '2') {
                return (
                    <div className="col-lg-2 col-md-3 col-sm-6" key={item.id}>
                        <ArticleInside post={item}/>
                    </div>
                );
            } else if (column === '3') {
                return (
                    <div className="col-md-4 col-sm-6" key={item.id}>
                        <ArticleInside post={item}/>
                    </div>
                );
            } else if (column === '4') {
                return (
                    <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                        <ArticleInside post={item}/>
                    </div>
                );
            } else {
                return (
                    <div className="col-md-6" key={item.id}>
                        <ArticleInside post={item}/>
                    </div>
                );
            }
        });
    }
    return (
        <div className="ps-blog--post-items">
            <div className="row">
                {viewPostItems}
            </div>
        </div>
    );
};

export default BlogPostGridItemsInside;
