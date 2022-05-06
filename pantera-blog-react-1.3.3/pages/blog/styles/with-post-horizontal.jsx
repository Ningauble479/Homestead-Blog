import React from 'react';
import BlogHero from '~/components/partials/blog/BlogHero';
import Container from '~/components/layouts/Container';
import HomeSidebar from '~/components/partials/homepage/modules/HomeSidebar';
import PostHorizontalItems from '~/components/partials/post/PostHorizontalItems';

const WithPostHorizontalScreen = () => {
    return (
        <Container title="With Post Vertical">
            <main className="ps-page ps-page--blog">
                <BlogHero title="With Post Vertical" image="/static/img/hero/blog.jpg" />
                <div className="container">
                    <section className="ps-blog--sidebar">
                        <div className="ps-section__left">
                            <div className="ps-section__items">
                                <PostHorizontalItems pageSize={6} columns={3} />
                            </div>
                        </div>
                        <div className="ps-section__right">
                            <HomeSidebar />
                        </div>
                    </section>
                </div>
            </main>
        </Container>
    );
};

export default WithPostHorizontalScreen;
