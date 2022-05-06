import React from 'react';
import Subscribe from '~/components/partials/common/Subscribe';
import PostGridItems from '~/components/partials/post/PostGridItems';
import Container from '~/components/layouts/Container';
import CollectionFeaturePostsWithHero from '~/components/partials/collections/CollectionFeaturePostsWithHero';
import HeaderSimple from '~/components/shared/headers/HeaderSimple';

const HomeGridScreen = () => {
    return (
        <Container title="Homepage Grid" header={<HeaderSimple className="header--simple" />}>
            <main id="homepage-grid">
                <CollectionFeaturePostsWithHero />
                <div className="container">
                    <Subscribe />
                    <section className="ps-section--home-grid">
                        <PostGridItems columns={3} pageSize={9} />
                    </section>
                </div>
            </main>
        </Container>
    );
};

export default HomeGridScreen;
