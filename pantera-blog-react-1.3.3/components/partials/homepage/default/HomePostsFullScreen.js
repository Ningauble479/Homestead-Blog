import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { getPostsByColletionSlug } from '~/utilities/product-helper';
import ArticlePrimary from '~/components/elements/articles/ArticlePrimary';
import SkeletonArticlePrimary from '~/components/elements/skeletons/SkeletonArticlePrimary';

const HomePostsFullScreen = ({ collections, slug }) => {
    let postViewItems, postItems, carouselItems;
    const [loading, setLoading] = useState(true);
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

    function handleSetLoading() {
        setTimeout(function () {
            setLoading(false);
        }, 500);
    }

    if (collections) {
        postItems = getPostsByColletionSlug(collections, slug);
        if (postItems) {
            handleSetLoading();
            carouselItems = postItems.map((item) => (
                <div key={item.id}>
                    <ArticlePrimary post={item}/>
                </div>
            ));
            if (!loading) {
                postViewItems = (
                    <Slider {...carouselSetting} arrows={false} className="ps-carousel">
                        {carouselItems}
                    </Slider>
                );
            } else {
                postViewItems = (
                    <div className="container">
                        <SkeletonArticlePrimary />
                    </div>
                );
            }
        } else {
            postViewItems = (
                <div className="container">
                    <SkeletonArticlePrimary />
                </div>
            );
        }
    }

    return <section className="ps-top-posts">
        <div className="container">
            {postViewItems}
        </div>
    </section>;
};

export default connect((state) => state.collection)(HomePostsFullScreen);
