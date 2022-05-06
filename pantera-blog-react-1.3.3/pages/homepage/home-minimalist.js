/*
    NOTICE!!!
    Old homepage, will remove from next version
* */

import React from 'react';
import HomeMinimalistPostItems from '~/components/partials/homepage/minimalist/HomeMinimalistPostItems';
import Container from '~/components/layouts/Container';

const HomeMinimalistPage = () => {
    return (
        <Container title="Home Minimalist">
            <main id="homepage-timeline">
                <div className="container">
                    <section className="ps-page--minimalist">
                        <div className="ps-page__header">
                            <p>My Blog</p>
                            <h3>
                                Check my life <span>Inside Story.</span>
                            </h3>
                        </div>
                        <div className="ps-page__content">
                            <HomeMinimalistPostItems collectionSlug="home-featured-posts" />
                        </div>
                    </section>
                </div>
            </main>
        </Container>
    );
};

export default HomeMinimalistPage;
