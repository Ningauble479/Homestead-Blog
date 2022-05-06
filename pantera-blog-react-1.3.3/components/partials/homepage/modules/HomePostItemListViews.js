import React, { useEffect, useState } from 'react';
import ArticleList from '~/components/elements/articles/ArticleList';
import PostRepository from '~/repositories/PostRepository';


const HomePostItemListViews = ({ collectionSlug }) => {
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
                _limit: 5,
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

    let postsView;
    if (!loading && posts) {
        postsView = posts.map(item => (
            <ArticleList post={item} key={item.id}/>
        ));
    }
    return (
        <div className="ps-post-items">
            {postsView}
        </div>
    );
};

export default HomePostItemListViews;
