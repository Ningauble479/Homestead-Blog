import React from 'react';
import Subscribe from '~/components/partials/common/Subscribe';
import BlogSidebar from '~/components/partials/blog/BlogSidebar';
import Container from '~/components/layouts/Container';
import BreadCrumb from '~/components/elements/BreadCrumb';

const BlogWithoutHero = () => {
    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Blog',
            url: '/blog',
        },
        {
            text: 'With Hero',
        },
    ];
    return (
        <Container title="Our Blog">
            <main className="ps-page ps-page--blog">
                <BreadCrumb source={breadcrumb} />
                <div className="container">
                    <BlogSidebar layout="right" />
                    <Subscribe />
                </div>
            </main>
        </Container>
    );
};

export default BlogWithoutHero;
