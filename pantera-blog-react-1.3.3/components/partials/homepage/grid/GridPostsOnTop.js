import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import ArticlePrimary from '~/components/elements/articles/ArticlePrimary';
import SkeletonArticlePrimary from '~/components/elements/skeletons/SkeletonArticlePrimary';
import PostRepository from '~/repositories/PostRepository';

const GridPostsOnTop = ({ collectionSlug }) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    async function getPosts() {
        let queries, APIPosts;
        if (collectionSlug !== '') {
            queries = {
                slug_eq: collectionSlug
            };
            APIPosts = await PostRepository.SPGetPostItemOfCollectionBySlug(queries);
        } else {
            queries = {
                _limit: 5
            };
            APIPosts = await PostRepository.getPosts(queries);
        }

        if (APIPosts) {
            setTimeout(function() {
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

    const carouselSetting = {
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        lazyload: true,
        fade: true
    };
    let postViewItems, carouselItems;

    if (!loading && posts) {
        carouselItems = posts.map((item) => (
            <div key={item.id}>
                <ArticlePrimary classes="boxed" post={item}/>
            </div>
        ));
        postViewItems = (
            <Slider {...carouselSetting} arrows={false} className="ps-carousel">
                {carouselItems}
            </Slider>
        );
    } else {
        postViewItems = (
            <div className="container">
                <SkeletonArticlePrimary/>
            </div>
        );
    }

    return <section className="ps-default-posts-on-top">{postViewItems}</section>;
};

export default connect((state) => state.collection)(GridPostsOnTop);
