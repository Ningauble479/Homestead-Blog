/*
    NOTICE!!!
    Old homepage, will remove from next version
* */

import React from 'react';
import HomeTimelinePostItems from '~/components/partials/homepage/timeline/HomeTimelinePostItems';
import Container from '~/components/layouts/Container';

const HomeTimeLineScreen = () => {
    return (
        <Container title="Homepage Timeline">
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
                            <HomeTimelinePostItems slug="home-featured-posts" />
                        </div>
                    </section>
                </div>
            </main>
        </Container>
    );
};

export default HomeTimeLineScreen;
