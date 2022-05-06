import React from 'react';
import BlogHero from '~/components/partials/blog/BlogHero';
import Container from '~/components/layouts/Container';
import PostGridItems from '~/components/partials/post/PostGridItems';

const BlogLayoutFullwidth = () => {
    return (
        <Container title="Blog fullwidth">
            <main className="ps-page ps-page--blog">
                <BlogHero title="Blog fullwidth" image="/static/img/hero/blog.jpg" />
                <div className="container-fluid">
                    <div className="ps-blog">
                        <PostGridItems pageSize={12} columns={6} />
                    </div>
                </div>
            </main>
        </Container>
    );
};

export default BlogLayoutFullwidth;
