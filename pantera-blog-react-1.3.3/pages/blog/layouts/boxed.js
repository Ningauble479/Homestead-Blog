import React from 'react';
import BlogHero from '~/components/partials/blog/BlogHero';
import Container from '~/components/layouts/Container';
import PostGridItems from '~/components/partials/post/PostGridItems';

const BlogLayoutBoxed = () => {
    return (
        <Container title="Blog boxed layout">
            <main className="ps-page ps-page--blog">
                <BlogHero title="Blog boxed layout" image="/static/img/hero/blog.jpg" />
                <div className="container">
                    <div className="ps-blog">
                        <PostGridItems pageSize={12} columns={3} />
                    </div>
                </div>
            </main>
        </Container>
    );
};

export default BlogLayoutBoxed;
