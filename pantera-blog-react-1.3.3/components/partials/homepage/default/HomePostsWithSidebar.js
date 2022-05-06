import React from 'react';
import HomeSidebar from '~/components/partials/homepage/modules/HomeSidebar';
import PostGridItems from '~/components/partials/post/PostGridItems';

const HomePostsWithSidebar = () => {
    return (
        <section className="ps-home-our-story">
            <div className="ps-section__content">
                <div className="ps-blog--sidebar">
                    <div className="ps-section__left">
                        <div className="ps-section__header">
                            <h3 className="ps-heading ps-heading--with-icon">
                                <i className="feather icon icon-heart"></i>
                                Our Stories
                            </h3>
                        </div>
                        <div className="ps-section__items">
                            <PostGridItems pageSize={6} />
                        </div>
                    </div>
                    <div className="ps-section__right">
                        <HomeSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePostsWithSidebar;
