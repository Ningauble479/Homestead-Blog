import React from 'react';
import Container from '~/components/layouts/Container';
import PostTypeListing from '~/components/partials/post/PostTypeListing';

const PostTypesScreen = () => {
    return (
        <Container title="Post Styles">
            <PostTypeListing pageSize={2} />
        </Container>
    );
};

export default PostTypesScreen;
