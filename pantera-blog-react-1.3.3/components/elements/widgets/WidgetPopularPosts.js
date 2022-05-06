import React, { useEffect } from 'react';
import Link from 'next/link';
import useGetPosts from '~/hooks/useGetPosts';
import ArticleHorizontalSmall from '~/components/elements/articles/ArticleHorizontalSmall';
import ArticleSimpleWithNumber from '~/components/elements/articles/ArticleSimleWithNumber';
import ArticlePrimary from '~/components/elements/articles/ArticlePrimary';
import Slider from 'react-slick';
import ArticleInside from '~/components/elements/articles/ArticleInside';

const WidgetPopularPosts = ({ collectionSlug }) => {
    const { loading, posts, getPosts, getPostsByCollection } = useGetPosts();

    async function handleGetDataFromAPI() {
        let queries;
        if (collectionSlug) {
            queries = {
                slug_eq: collectionSlug,
            };
            await getPostsByCollection(queries);
        } else {
            queries = {
                _sort: 'id:desc',
                _limit: 5,
            };
            await getPosts(queries);
        }
    }

    useEffect(() => {
        handleGetDataFromAPI();
    }, [collectionSlug]);

    //Views
    const carouselSetting = {
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        lazyload: true,
        fade: true,
    };
    let postsView;
    if (!loading) {
        if (posts && posts.length > 0) {
            let carouselItems = posts.map((item) => (
                <div key={item.id}>
                    <ArticleInside classes="small" post={item} />
                </div>
            ));
            postsView = (
                <Slider {...carouselSetting} arrows={false} className="ps-carousel">
                    {carouselItems}
                </Slider>
            );
        } else {
            postsView = <p>No post found.</p>;
        }
    } else {
        postsView = <p>Loading...</p>;
    }
    return (
        <aside className="ps-widget ps-widget--popular-posts">
            <h4 className="ps-widget__heading">
                <span>Popular Posts</span>
            </h4>
            <div className="ps-widget__content">
                {postsView}

                {/*  <article className="ps-post ps-post--popular">
                    <span className="ps-post__counter">2</span>
                    <Link href="/">
                        <a className="ps-post__title">Pastel Colors - The Trend of 2020</a>
                    </Link>
                </article>*/}
            </div>
        </aside>
    );
};

export default WidgetPopularPosts;
