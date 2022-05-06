import React, { useEffect } from 'react';
import useGetPosts from '~/hooks/useGetPosts';
import ArticleClassic from '~/components/elements/articles/ArticleClassic';
import ArticleList from '~/components/elements/articles/ArticleList';

const PostClassicItems = ({ collectionSlug, pageSize = 10 }) => {
    const { loading, posts, getPosts, getPostsByCollection } = useGetPosts();

    async function handleGetDataFromAPI() {
        let queries;
        if (collectionSlug !== undefined) {
            queries = {
                slug_eq: collectionSlug,
            };
            await getPostsByCollection(queries);
        } else {
            queries = {
                _sort: 'id:desc',
                _limit: pageSize,
            };
            await getPosts(queries);
        }
    }

    useEffect(() => {
        handleGetDataFromAPI();
    }, [collectionSlug]);

    let postItemsView;
    if (!loading) {
        if (posts) {
            if (posts.length > 0) {
                const postItems = posts.map((item) => {
                    return <ArticleList post={item} key={item.id} />;
                });
                postItemsView = (
                    <div className="ps-post-items">
                        <div className="row">{postItems}</div>
                        <div className="ps-section__pagination ps-loadmore">
                            <a href="/blog" className="effect--underline">
                                Load more
                            </a>
                        </div>
                    </div>
                );
            }
        } else {
            postItemsView = <p>No post found.</p>;
        }
    } else {
        postItemsView = <p>Loading...</p>;
    }

    return <div className="ps-blog--post-items">{postItemsView}</div>;
};

export default PostClassicItems;
