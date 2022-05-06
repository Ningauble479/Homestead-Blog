import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { getPostsByColletionSlug } from '~/utilities/product-helper';
import ArticleGridSimple from '~/components/elements/articles/ArticleGridSimple';
import ArticleInside from '~/components/elements/articles/ArticleInside';

class HomeFeaturesPosts extends Component {
    constructor(props) {
        super(props);
    }

    handleCarouselPrev = (e) => {
        e.preventDefault();
        this.slider.slickPrev();
    };

    handleCarouselNext = (e) => {
        e.preventDefault();
        this.slider.slickNext();
    };

    render() {
        const { collections, slug } = this.props;
        let postViewItems, postItems, carouselItems;

        const carouselSetting = {
            dots: false,
            infinite: false,
            speed: 750,
            slidesToShow: 3,
            slidesToScroll: 1,
            gap: 30,
            arrows: true,
            lazyload: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                        arrows: false,
                    },
                },
            ],
        };
        if (collections) {
            postItems = getPostsByColletionSlug(collections, slug);
            if (postItems) {
                carouselItems = postItems.map((item) => (
                    <div key={item.id}>
                        <ArticleInside post={item} />
                    </div>
                ));
                postViewItems = (
                    <Slider
                        ref={(slider) => (this.slider = slider)}
                        {...carouselSetting}
                        arrows={false}
                        className="ps-carousel"
                    >
                        {carouselItems}
                    </Slider>
                );
            }
        }

        return (
            <section className="ps-home-feature-posts">
                <div className="ps-section__header">
                    <h3>Feature Posts</h3>
                    <div className="ps-section__nav">
                        <a href="#" className="carousel-prev" onClick={this.handleCarouselPrev}>
                            <i className="feather icon icon-chevron-left"></i>
                        </a>
                        <a href="#" className="carousel-prev" onClick={this.handleCarouselNext}>
                            <i className="feather icon icon-chevron-right"></i>
                        </a>
                    </div>
                </div>
                <div className="ps-section__content">{postViewItems && postViewItems}</div>
            </section>
        );
    }
}

export default connect((state) => state.collection)(HomeFeaturesPosts);
