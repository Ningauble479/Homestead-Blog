import React, { useEffect} from 'react';
import Slider from 'react-slick';
import ArticlePrimary from '~/components/elements/articles/ArticlePrimary';
import useGetPosts from '~/hooks/useGetPosts';

const DefaultPostsOnTop = ({ collectionSlug }) => {
    const {loading, posts, getPostsByCollection, getPosts }= useGetPosts();

    async function getPostItems() {
        let queries;
        if (collectionSlug !== '') {
            queries = {
                slug_eq: collectionSlug
            };
            await getPostsByCollection(queries);
        } else {
            queries = {
                _limit: 5,
            };
            await getPosts(queries)
        }
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
        fade: true
    };
    if (!loading && posts) {
        let carouselItems = posts.map((item) => (
            <div key={item.id}>
                <ArticlePrimary post={item}/>
            </div>
        ));
        postViewItems = (
            <Slider {...carouselSetting} arrows={false} className="ps-carousel">
                {carouselItems}
            </Slider>
        );
    }

    return <section className="ps-default-posts-on-top">
        {postViewItems}
    </section>;
};

export default DefaultPostsOnTop;
