import React from 'react';

import HomePostsWithSidebar from '~/components/partials/homepage/default/HomePostsWithSidebar';
import Container from '~/components/layouts/Container';
import SidebarDark from '~/components/shared/sidebars/SidebarDark';
import FooterSimple from '~/components/shared/footers/FooterSimple';
import CollectionFeaturePostsWithHero from '~/components/partials/collections/CollectionFeaturePostsWithHero';

const HomeSidebarLeftScreen = () => {
    return (
        <Container title="Sidebar" header={null} footer={null}>
            <div className="ps-page--sidebar">
                <div className="ps-page__sidebar">
                    <SidebarDark />
                </div>
                <div className="ps-page__wrapper">
                    <main id="homepage-primary">
                        {/*     <CollectionFeaturePostsWithHero />*/}
                        <div className="container">
                            <HomePostsWithSidebar />
                        </div>
                    </main>
                    <FooterSimple />
                </div>
            </div>
        </Container>
    );
};

export default HomeSidebarLeftScreen;
