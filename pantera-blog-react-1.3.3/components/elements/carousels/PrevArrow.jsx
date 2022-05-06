import React from 'react';

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="slick-arrow slick-prev" onClick={onClick}>
            <i className="feather icon icon-arrow-left"></i>
        </button>
    );
};

export default PrevArrow;
