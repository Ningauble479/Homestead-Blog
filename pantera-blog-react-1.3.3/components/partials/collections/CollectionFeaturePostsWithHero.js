import React, { useEffect } from 'react';
import Slider from 'react-slick';
import ArticlePrimary from '~/components/elements/articles/ArticlePrimary';
import useGetPosts from '~/hooks/useGetPosts';
import SkeletonHeroFullScreen from '~/components/elements/skeletons/SkeletonHeroFullScreen';

const CollectionFeaturePostsWithHero = ({ container = false }) => {
    const { loading, posts, getPosts } = useGetPosts();

    async function getPostItems() {
        let queries;
        queries = {
            isFeature_eq: true,
            _limit: 3,
        };
        await getPosts(queries);
    }

    useEffect(() => {
        getPostItems();
    }, []);

    let postViewItems;
    const carouselSetting = {
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        lazyload: true,
        fade: true,
    };
    if (!loading) {
        if (posts) {
            if (posts.length > 0) {
                let carouselItems = posts.map((item) => (
                    <div key={item.id}>
                        <ArticlePrimary post={item} />
                    </div>
                ));
                postViewItems = (
                    <Slider {...carouselSetting} arrows={false} className="ps-carousel">
                        {carouselItems}
                    </Slider>
                );
            }
        } else {
            postViewItems = <SkeletonHeroFullScreen />;
        }
    } else {
        postViewItems = <SkeletonHeroFullScreen />;
    }
    if (!container) {
        return <section className="ps-colection--with-hero">{postViewItems}</section>;
    } else {
        return (
            <section className="ps-colection--with-hero with-container">
                <div className="container">{postViewItems}</div>
            </section>
        );
    }
};

export default CollectionFeaturePostsWithHero;
