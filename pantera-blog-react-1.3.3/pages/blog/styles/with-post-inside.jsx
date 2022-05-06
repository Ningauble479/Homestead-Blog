import React from 'react';
import Subscribe from '~/components/partials/common/Subscribe';
import BlogSidebar from '~/components/partials/blog/BlogSidebar';
import BlogHero from '~/components/partials/blog/BlogHero';
import Container from '~/components/layouts/Container';
import HomeSidebar from '~/components/partials/homepage/modules/HomeSidebar';
import PostInsideItems from '~/components/partials/post/PostInsideItems';

const WithPostInsideScreen = () => {
    return (
        <Container title="With Post Inside">
            <main className="ps-page ps-page--blog">
                <BlogHero title="With Post Inside" image="/static/img/hero/blog.jpg" />
                <div className="container">
                    <section className="ps-blog--sidebar">
                        <div className="ps-section__left">
                            <div className="ps-section__items">
                                <PostInsideItems pageSize={12} columns={2} />
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

export default WithPostInsideScreen;
