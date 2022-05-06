import React from 'react';
import Subscribe from '~/components/partials/common/Subscribe';
import HomePostsWithSidebar from '~/components/partials/homepage/default/HomePostsWithSidebar';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import CollectionFeaturePostsWithHero from '~/components/partials/collections/CollectionFeaturePostsWithHero';
import CollectionPostsHighlight from '~/components/partials/collections/CollectionPostsHighlight';
import Container from '~/components/layouts/Container';

const HomeModermScreen = () => {
    return (
        <Container title="Creative React Blog Template">
            <HeaderDefault />
            <main id="homepage-primary">
                <CollectionFeaturePostsWithHero collectionSlug="featured-posts" container={true} />
                <CollectionPostsHighlight columns="4" pageSize={6} />
                <div className="container">
                    <HomePostsWithSidebar />
                </div>
                <Subscribe boxed={false} />
            </main>
        </Container>
    );
};

export default HomeModermScreen;
