import React from 'react';

const WidgetSearch = () => {
    return (
        <aside className="ps-widget ps-widget--search">
            <form method="get">
                <div className="form-group">
                    <input className="form-control" placeholder="Enter your keyword?"/>
                    <button aria-label="search-btn"><i className="feather icon icon-search"></i></button>
                </div>
            </form>

        </aside>
    )
};

export default WidgetSearch;