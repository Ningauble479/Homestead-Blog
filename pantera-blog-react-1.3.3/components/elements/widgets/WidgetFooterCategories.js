import React from 'react';

const WidgetFooterCategories = () => {
    return (
        <aside className="ps-widget ps-widget--footer">
            <h4 className="ps-widget__heading">
                <span>Categories</span>
            </h4>
            <div className="ps-widget__content">
                <ul className="ps-list">
                    <li>
                        <a href="#">All</a>
                    </li>
                    <li>
                        <a href="#">Travel</a>
                    </li>
                    <li>
                        <a href="#">LifeStyle</a>
                    </li>
                    <li>
                        <a href="#">Technology</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default WidgetFooterCategories;
