import React from 'react';
import HomeSidebar from '~/components/partials/homepage/modules/HomeSidebar';
import BlogPostGrids from '~/components/partials/blog/blog-posts/BlogPostGrids';

const BlogSidebar = ({ layout }) => {
    return (
        <section className={`ps-blog--sidebar ${layout === 'left' && 'left'}`}>
            <div className="ps-section__left">
                <div className="ps-section__items">
                    <BlogPostGrids />
                </div>
            </div>
            <div className="ps-section__right">
                <HomeSidebar />
            </div>
        </section>
    );
};

export default BlogSidebar;
