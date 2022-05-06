import React from 'react';

const WidgetFooterPopularTags = () => {
    return(
        <aside className="ps-widget ps-widget--footer ps-widget--popular-tags">
            <h3 className="ps-widget__heading">
                Popular Tags
            </h3>
            <div className="ps-wiget__content">
                <a href="#">#trending</a>
                <a href="#">#lifestyle</a>
                <a href="#">#design</a>
                <a href="#">#travel</a>
            </div>
        </aside>
    )
};

export default WidgetFooterPopularTags;