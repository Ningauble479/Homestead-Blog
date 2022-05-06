import React from 'react';
import BlogHero from '~/components/partials/blog/BlogHero';
import Container from '~/components/layouts/Container';
import PostTextOnlyItems from '~/components/partials/post/PostTextOnlyItems';

const BlogStyleOnlyTextScreen = () => {
    return (
        <Container title="Only Text">
            <main className="ps-page ps-page--blog">
                <BlogHero title="Text Only" image="/static/img/hero/blog.jpg" />
                <div className="container">
                    <div className="ps-blog">
                        <PostTextOnlyItems columns={3} pageSize={9} />
                    </div>
                </div>
            </main>
        </Container>
    );
};

export default BlogStyleOnlyTextScreen;
