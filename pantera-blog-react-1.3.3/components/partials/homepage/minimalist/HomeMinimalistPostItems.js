import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ArticleClassic from '~/components/elements/articles/ArticleClassic';
import ViewAllPosts from '~/components/elements/ViewAllPosts';
import PostRepository from '~/repositories/PostRepository';

const HomeMinimalistPostItems = ({ collectionSlug }) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    async function getPosts() {
        let queries, APIPosts;
        if (collectionSlug !== undefined) {
            queries = {
                slug_eq: collectionSlug
            };
            APIPosts = await PostRepository.SPGetPostItemOfCollectionBySlug(queries);
        } else {
            queries = {
                _limit: 6
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
        viewPostItems = posts.map((item) => <ArticleClassic post={item} key={item.id}/>);
    }

    return (
        <section className="ps-section--home-timeline">
            <div className="ps-section__content">
                <div className="ps-post-items">{viewPostItems}</div>
            </div>
            <ViewAllPosts/>
        </section>
    );
};
export default connect((state) => state.collection)(HomeMinimalistPostItems);
