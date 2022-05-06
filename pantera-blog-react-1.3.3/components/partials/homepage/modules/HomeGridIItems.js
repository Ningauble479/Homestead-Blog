import React, { useState, useEffect } from 'react';
import ArticleGrid from '~/components/elements/articles/ArticleGrid';
import PostRepository from '~/repositories/PostRepository';

const HomeGridIItems = ({ collectionSlug }) => {
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
                _limit: 5
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

    let  viewPostItems;
    if (!loading && posts) {

        viewPostItems = posts.map(item => (
            <div className="col-md-6" key={item.id}>
                <ArticleGrid post={item}/>
            </div>
        ));
    }
    return (
        <div className="row">
            {viewPostItems}
        </div>
    );
};

export default HomeGridIItems;
