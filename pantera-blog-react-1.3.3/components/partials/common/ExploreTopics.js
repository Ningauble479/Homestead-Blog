import React, { Component } from 'react';
import Slider from 'react-slick';
import TopicDefault from '~/components/elements/topics/TopicDefault';

class ExploreTopics extends Component {
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
            slidesToShow: 5,
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
        postViewItems = (
            <Slider
                ref={(slider) => (this.slider = slider)}
                {...carouselSetting}
                arrows={false}
                className="ps-carousel"
            >
                <div>
                    <TopicDefault img="/static/img/topics/1.jpg" title="all" />
                </div>
                <div>
                    <TopicDefault img="/static/img/topics/2.jpg" title="Travel" />
                </div>
                <div>
                    <TopicDefault img="/static/img/topics/3.jpg" title="Technology" />
                </div>
                <div>
                    <TopicDefault img="/static/img/topics/4.jpg" title="LifeStyle" />
                </div>
                <div>
                    <TopicDefault img="/static/img/topics/5.jpg" title="Work" />
                </div>
                <div>
                    <TopicDefault img="/static/img/topics/6.jpg" title="Family & Pets" />
                </div>
            </Slider>
        );

        return (
            <section className="ps-section--classic ps-explore-topics">
                <div className="ps-section__header">
                    <h3>Explore Topics</h3>
                </div>
                <div className="ps-section__content">{postViewItems && postViewItems}</div>
            </section>
        );
    }
}

export default ExploreTopics;
