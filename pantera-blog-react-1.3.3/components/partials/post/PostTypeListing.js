import React, { useState, useEffect } from 'react';
import ArticleGrid from '~/components/elements/articles/ArticleGrid';
import useGetPosts from '~/hooks/useGetPosts';
import ArticlePrimary from '~/components/elements/articles/ArticlePrimary';
import ArticleList from '~/components/elements/articles/ArticleList';
import ArticleInside from '~/components/elements/articles/ArticleInside';
import ArticleSmallThumbail from '~/components/elements/articles/ArticleSmallThumbail';
import ArticleHorizontalSmall from '~/components/elements/articles/ArticleHorizontalSmall';
import ArticleClassic from '~/components/elements/articles/ArticleClassic';

const PostGridItems = ({ collectionSlug, columns = 2, pageSize = 10 }) => {
    const { loading, posts, getPosts, getPostsByCollection } = useGetPosts();
    const [classes, setClasses] = useState('col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6');

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
                setClasses('col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6');
                return 3;
                break;
            case 4:
                setClasses('col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6');
                return 4;
                break;
            case 4:
                setClasses('col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6');
                return 4;
                break;
            case 6:
                setClasses('col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6');
                return 6;
                break;

            default:
                setClasses('col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6');
        }
    }

    useEffect(() => {
        handleGetDataFromAPI();
        handleSetColumns(columns);
    }, [collectionSlug]);

    let postItemsView,
        postGridItems,
        postListItems,
        postInsideItems,
        postClassicItems,
        postSmallThumbItems,
        postHorizontalSmallItems,
        postPrimaryItems;
    if (!loading) {
        if (posts) {
            if (posts.length > 0) {
                postGridItems = posts.map((item) => {
                    return (
                        <div className="col-md-4 col-sm--6 col-12" key={item.id}>
                            <ArticleGrid post={item} />
                        </div>
                    );
                });
                postInsideItems = posts.map((item) => {
                    return (
                        <div className="col-md-4 col-sm--6 col-12" key={item.id}>
                            <ArticleInside post={item} />
                        </div>
                    );
                });

                postPrimaryItems = <ArticlePrimary post={posts[0]} />;

                postListItems = posts.map((item) => {
                    return <ArticleList post={item} key={item.id} />;
                });

                postClassicItems = posts.map((item) => {
                    return <ArticleClassic post={item} key={item.id} />;
                });

                postSmallThumbItems = posts.map((item) => {
                    return <ArticleSmallThumbail post={item} key={item.id} />;
                });

                postHorizontalSmallItems = posts.map((item) => {
                    return <ArticleHorizontalSmall post={item} key={item.id} />;
                });
            }
        } else {
            postItemsView = <p>No post found.</p>;
        }
    } else {
        postItemsView = <p>Loading...</p>;
    }

    return (
        <div className="ps-post-type-listing pt-100">
            <figure className="mb-100">
                <div className="container">
                    <h3 className="ps-heading--with-icon mb-50">
                        <i className="feather icon icon-calendar"></i>
                        Post Primary
                    </h3>
                </div>

                <section>{postPrimaryItems}</section>
            </figure>
            <div className="container">
                <div className="ps-section__content">
                    <figure className="mb-100">
                        <h3 className="ps-heading--with-icon mb-50">
                            <i className="feather icon icon-calendar"></i>
                            Post Classic
                        </h3>
                        <section>{postClassicItems}</section>
                    </figure>
                    <figure className="mb-100">
                        <h3 className="ps-heading--with-icon mb-50">
                            <i className="feather icon icon-calendar"></i>
                            Post Grid
                        </h3>
                        <div>
                            <div className="row">{postGridItems}</div>
                        </div>
                    </figure>
                    <figure className="mb-100">
                        <figcaption>
                            <h3 className="ps-heading--with-icon mb-50">
                                <i className="feather icon icon-calendar"></i>
                                Post Inside
                            </h3>
                        </figcaption>
                        <section className="row">{postInsideItems}</section>
                    </figure>
                    <figure className="mb-100">
                        <figcaption>
                            <h3 className="ps-heading--with-icon mb-50">
                                <i className="feather icon icon-calendar"></i>
                                Post List
                            </h3>
                        </figcaption>
                        <section>{postListItems}</section>
                    </figure>

                    <figure className="mb-100">
                        <figcaption>
                            <h3 className="ps-heading--with-icon mb-50">
                                <i className="feather icon icon-calendar"></i>
                                Post Small Thumbail
                            </h3>
                        </figcaption>
                        <section>{postSmallThumbItems}</section>
                    </figure>
                    <figure className="mb-100">
                        <figcaption>
                            <h3 className="ps-heading--with-icon mb-50">
                                <i className="feather icon icon-calendar"></i>
                                Post Horizontal Small
                            </h3>
                        </figcaption>
                        <section>{postHorizontalSmallItems}</section>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default PostGridItems;
