import React from 'react';
import WidgetCategories from '~/components/elements/widgets/WidgetCategories';
import WidgetFollowMe from '~/components/elements/widgets/WidgetFollowMe';
import WidgetSearch from '~/components/elements/widgets/WidgetSearch';
import WidgetRecentPosts from '~/components/elements/widgets/WidgetRecentPosts';
import WidgetPopularPosts from '~/components/elements/widgets/WidgetPopularPosts';

const HomeSidebar = () => {
    return (
        <div className="ps-sidebar ps-sidebar--home">
            {/* <WidgetAuthor />*/}
            <WidgetSearch />
            <WidgetPopularPosts />
            <WidgetRecentPosts />
            <WidgetCategories />
            <WidgetFollowMe />
        </div>
    );
};

export default HomeSidebar;
