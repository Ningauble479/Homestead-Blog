import React from 'react';

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="slick-arrow slick-next" onClick={onClick}>
            <i className="feather icon icon-arrow-right"></i>
        </button>
    );
};

export default NextArrow;
