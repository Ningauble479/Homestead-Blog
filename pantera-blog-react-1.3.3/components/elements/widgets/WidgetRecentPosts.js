import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ArticleHorizontalSmall from '~/components/elements/articles/ArticleHorizontalSmall';
import useGetPosts from '~/hooks/useGetPosts';

const WidgetRecentPosts = ({ collectionSlug }) => {
    const { loading, posts, getPosts, getPostsByCollection } = useGetPosts();

    async function handleGetDataFromAPI() {
        let queries;
        if (collectionSlug) {
            queries = {
                slug_eq: collectionSlug
            };
            await getPostsByCollection(queries);
        } else {
            queries = {
                _sort: 'id:desc',
                _limit: 5
            };
            await getPosts(queries);
        }
    }

    useEffect(() => {
        handleGetDataFromAPI();
    }, [collectionSlug]);

    //Views

    let postsView;
    if (!loading) {
        if (posts && posts.length > 0) {
            postsView = posts.map(item => (
                <ArticleHorizontalSmall post={item} key={item.id}/>
            ));
        } else {
            postsView = <p>No post found.</p>;
        }
    } else {
        postsView = <p>Loading...</p>;
    }
    return (
        <aside className="ps-widget ps-widget--popular-posts">
            <h4 className="ps-widget__heading"><span>Recent Posts</span></h4>
            <div className="ps-widget__content">
                {postsView}
            </div>
        </aside>);
};

export default connect(state => state.collection)(WidgetRecentPosts);
