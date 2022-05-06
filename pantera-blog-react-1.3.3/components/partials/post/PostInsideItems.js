import React, { useState, useEffect } from 'react';
import ArticleGrid from '~/components/elements/articles/ArticleGrid';
import ViewAllPosts from '~/components/elements/ViewAllPosts';
import useGetPosts from '~/hooks/useGetPosts';
import Link from 'next/link';
import ArticleInside from '~/components/elements/articles/ArticleInside';

const PostInsideItems = ({ collectionSlug, columns = 2, pageSize = 10 }) => {
    const { loading, posts, getPosts, getPostsByCollection } = useGetPosts();
    const [classes, setClasses] = useState('col-xl-4 col-lg-4 col-md-3 col-sm-6 col-12');

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

    function handleSetColumns(columns) {
        switch (columns) {
            case 2:
                setClasses('col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12');
                return 3;
                break;
            case 4:
                setClasses('col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12');
                return 4;
                break;
            case 4:
                setClasses('col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12');
                return 4;
                break;
            case 6:
                setClasses('col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12');
                return 6;
                break;

            default:
                setClasses('col-xl-4 col-lg-4 col-md-3 col-sm-6 col-12');
        }
    }

    useEffect(() => {
        handleGetDataFromAPI();
        handleSetColumns(columns);
    }, [collectionSlug]);

    let postItemsView;
    if (!loading) {
        if (posts) {
            if (posts.length > 0) {
                const postItems = posts.map((item) => {
                    return (
                        <div className={classes} key={item.id}>
                            <ArticleInside post={item} />
                        </div>
                    );
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

export default PostInsideItems;
