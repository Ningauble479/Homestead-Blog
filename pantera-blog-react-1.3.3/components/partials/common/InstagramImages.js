import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { baseUrl } from '~/repositories/Repository';
import MediaRepository from '~/repositories/MediaRepository';
const InstagramImages = () => {
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState(null);

    async function getInstagramImages() {
        const SPInstagramImages = await MediaRepository.getInstagramById();
        if (SPInstagramImages) {
            setTimeout(function() {
                setLoading(false);
            }, 200);
            setImages(SPInstagramImages);
            return SPInstagramImages;
        } else {
            setImages(null);
            return null;
        }
    }

    useEffect(() => {
        getInstagramImages();
    }, []);

    const carouselSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
    };
    let instagramItems;
    if (!loading) {
        if (images && images.images) {
            instagramItems = images.images.map((item) => (
                <div className=" slick-slide" key={item.id}>
                    <div className="ps-block--instagram">
                        <img src={`${baseUrl}${item.url}`} alt="" />
                        <a href="https://www.instagram.com/">
                            <i className="feather icon icon-instagram"></i>
                        </a>
                    </div>
                </div>
            ));
        }
    }

    return (
        <div className="ps-section--instagram">
            <div className="ps-section__header">
                <p>Follow me on Instagram</p>
                <h3>
                    <i className="fa fa-instagram"></i>diaryforlife
                </h3>
            </div>
            <div className="ps-section__content">
                <Slider {...carouselSettings}>{instagramItems}</Slider>
            </div>
        </div>
    );
};

export default InstagramImages;
