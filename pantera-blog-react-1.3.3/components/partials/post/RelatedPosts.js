import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import PostRepository from '~/repositories/PostRepository';
import ArticleGrid from '~/components/elements/articles/ArticleGrid';

const RelatedPosts = ({ collectionSlug }) => {
    const sliderRef = useRef(null);
    const [postItems, setPostItems] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getProducts() {
        setLoading(true);
        const queries = {
            _limit: 5,
        };

        const responseData = await PostRepository.getPosts(queries);
        if (responseData) {
            setPostItems(responseData);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    const handleCarouselPrev = (e) => {
        e.preventDefault();
        sliderRef.current.slickPrev();
    };

    const handleCarouselNext = (e) => {
        e.preventDefault();
        sliderRef.current.slickNext();
    };

    useEffect(() => {
        getProducts();
    }, []);

    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 750,
        slidesToShow: 4,
        slidesToScroll: 3,
        gap: 30,
        arrows: true,
        lazyload: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    };

    // Views
    let postItemsView;
    if (!loading) {
        if (postItems && postItems.length > 0) {
            const slideItems = postItems.map((item) => (
                <div key={item.id}>
                    <ArticleGrid post={item} />
                </div>
            ));
            postItemsView = (
                <Slider
                    ref={(slider) => (sliderRef.current = slider)}
                    {...carouselSetting}
                    arrows={false}
                    className="ps-carousel"
                >
                    {slideItems}
                </Slider>
            );
        } else {
            postItemsView = <p>No post found.</p>;
        }
    } else {
        postItemsView = <div className="row">Loading...</div>;
    }
    return (
        <section className="ps-home-feature-posts">
            <div className="container">
                <div className="ps-section__header">
                    <h3>Related posts</h3>
                    <div className="ps-section__nav">
                        <a href="#" className="carousel-prev" onClick={(e) => handleCarouselPrev(e)}>
                            <i className="feather icon icon-chevron-left"></i>
                        </a>
                        <a href="#" className="carousel-prev" onClick={(e) => handleCarouselNext(e)}>
                            <i className="feather icon icon-chevron-right"></i>
                        </a>
                    </div>
                </div>
                <div className="ps-section__content">{postItemsView}</div>
            </div>
        </section>
    );
};

export default RelatedPosts;
