import React from 'react';

const WidgetCategories = () => {
    return (
        <aside className="ps-widget ps-widget--categories">
            <h4 className="ps-widget__heading"><span>Categories</span></h4>
            <div className="ps-widget__content">
                <ul className="ps-list">
                    <li><a href="#">All <span>50</span></a></li>
                    <li><a href="#">Travel <span>12</span></a></li>
                    <li><a href="#">Lifestyle <span>20</span></a></li>
                    <li><a href="#">Design <span>18</span></a></li>
                    <li><a href="#">Others <span>10</span></a></li>
                </ul>
            </div>
        </aside>
    )
};

export default WidgetCategories;