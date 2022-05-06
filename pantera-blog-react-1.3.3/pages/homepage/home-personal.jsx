import React from 'react';
import HomePersonalTopSlider from '~/components/partials/homepage/personal/HomePersonalTopSlider';
import PostGroupWithPrimary from '~/components/partials/post-groups/PostGroupWithPrimary';
import Container from '~/components/layouts/Container';
import Subscribe from '~/components/partials/common/Subscribe';

const Homepersonal = () => {
    return (
        <Container title="Homepage Timeline">
            <main id="homepage-personal">
                <HomePersonalTopSlider />
                <div className="container">
                    <PostGroupWithPrimary />
                </div>
                <Subscribe boxed={false} />
            </main>
        </Container>
    );
};

export default Homepersonal;
