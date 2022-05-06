import React from 'react';
import BlogHero from '~/components/partials/blog/BlogHero';
import Container from '~/components/layouts/Container';
import SidebarWithWidgets from '~/components/shared/sidebars/SidebarWithWidgets';
import PostVerticalSecondItems from '~/components/partials/post/PostVerticalSecondItems';

const WithPostVerticalScreen = () => {
    return (
        <Container title="Vertical 2">
            <main className="ps-page ps-page--blog">
                <BlogHero />
                <div className="container">
                    <section className="ps-blog--sidebar">
                        <div className="ps-section__left">
                            <div className="ps-section__items">
                                <PostVerticalSecondItems columns={2} pageSize={6} />
                            </div>
                        </div>
                        <div className="ps-section__right">
                            <SidebarWithWidgets />
                        </div>
                    </section>
                </div>
            </main>
        </Container>
    );
};

export default WithPostVerticalScreen;
