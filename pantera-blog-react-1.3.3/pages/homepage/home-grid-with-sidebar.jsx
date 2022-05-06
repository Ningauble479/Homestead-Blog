import React from 'react';
import BlogPostGrids from '~/components/partials/blog/blog-posts/BlogPostGrids';
import HomeSidebar from '~/components/partials/homepage/modules/HomeSidebar';
import Container from '~/components/layouts/Container';
import CollectionFeaturePostsWithHero from '~/components/partials/collections/CollectionFeaturePostsWithHero';
import PostGridItems from '~/components/partials/post/PostGridItems';

const HomeGridSidebarPage = () => {
    return (
        <Container title="Homepage grid with sidebar">
            <main id="homepage-grid-with-sidebar">
                <CollectionFeaturePostsWithHero />
                <div className="container">
                    <section className="ps-blog--sidebar ps-section--home-grid">
                        <div className="ps-section__left">
                            <div className="ps-section__items">
                                <PostGridItems columns={2} pageSize={9} />
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

export default HomeGridSidebarPage;
