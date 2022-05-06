import React from 'react';

import BlogHero from '~/components/partials/blog/BlogHero';
import HomeSidebar from '~/components/partials/homepage/modules/HomeSidebar';
import Container from '~/components/layouts/Container';
import PostClassicItems from '~/components/partials/post/PostClassicItems';

const WithPostClassicScreen = () => {
    return (
        <Container title="With Posts Classic">
            <main className="ps-page ps-page--blog">
                <BlogHero title="Classic layout right" />
                <div className="container">
                    <section className="ps-blog--sidebar ps-blog--classic">
                        <div className="ps-section__left">
                            <div className="ps-section__items">
                                <PostClassicItems pageSize={5} />
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

export default WithPostClassicScreen;
