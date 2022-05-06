import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import PostRepository from '~/repositories/PostRepository';
import SkeletonPostGrid from '~/components/elements/skeletons/SkeletonPostGrid';
import { generateTempArr } from '~/utilities/helpers';
import ArticleInside from '~/components/elements/articles/ArticleInside';
import NextArrow from '~/components/elements/carousels/NextArrow';
import PrevArrow from '~/components/elements/carousels/PrevArrow';

const HomePersonalTopSlider = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);
    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                },
            },
        ],
    };

    async function getPosts() {
        const queries = {
            _limit: 5,
        };

        const APIPosts = await PostRepository.getPosts(queries);
        if (APIPosts) {
            setTimeout(function () {
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

    // Views
    let sliderView;
    if (!loading) {
        const carouselItems = posts.map((item) => (
            <div className="slide-item" key={item.id}>
                <ArticleInside post={item} rounded={true} />
            </div>
        ));
        sliderView = (
            <Slider arrows={false} className="ps-carousel gap" slidesToShow={3} {...carouselSetting}>
                {carouselItems}
            </Slider>
        );
    } else {
        const skeletonItems = generateTempArr(3).map((item) => (
            <div className="col-md-4 col-6" key={item}>
                <SkeletonPostGrid />
            </div>
        ));
        sliderView = <div className="row">{skeletonItems}</div>;
    }

    return (
        <section className="ps-posts-in-carousel">
            <div className="ps-section__content">
                <div className="container">{sliderView}</div>
            </div>
        </section>
    );
};

export default HomePersonalTopSlider;
