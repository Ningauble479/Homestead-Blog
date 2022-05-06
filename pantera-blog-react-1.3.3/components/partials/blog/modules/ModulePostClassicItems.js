import React, { useState, useEffect } from 'react';
import ArticleClassic from '~/components/elements/articles/ArticleClassic';
import PostRepository from '~/repositories/PostRepository';

const ModulePostClassicItems = ({ collectionSlug }) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    async function getPosts() {
        let queries, APIPosts;
        if (collectionSlug) {
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
        console.log(APIPosts);
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
        viewPostItems = posts.map((item) => (
            <ArticleClassic post={item} key={item.id}/>
        ));
    } else {
        viewPostItems = <p>No post found.</p>;
    }

    return <div className="ps-post-items">{viewPostItems}</div>;
};

export default ModulePostClassicItems;
