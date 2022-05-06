import React from 'react';
import Subscribe from '~/components/partials/common/Subscribe';
import BlogSidebar from '~/components/partials/blog/BlogSidebar';
import BlogHero from '~/components/partials/blog/BlogHero';
import Container from '~/components/layouts/Container';

const BlogDefaultPage = () => {
    return (
        <Container title="Our Blog">
            <main className="ps-page ps-page--blog">
                <BlogHero title="Our Blog" image="/static/img/hero/blog.jpg" />
                <div className="container">
                    <BlogSidebar layout="right" />
                    <Subscribe />
                </div>
            </main>
        </Container>
    );
};

export default BlogDefaultPage;
