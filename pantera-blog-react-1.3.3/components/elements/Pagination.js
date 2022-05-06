import React from 'react';

const Pagination = () => (
    <ul className="ps-pagination">
        <li className="active"><a href="#"><span>01</span></a></li>
        <li><a href="#"><span>02</span></a></li>
        <li><a href="#"><span>03</span></a></li>
        <li className="ps-pagination__next">
            <a href="#">
                <i className="feather icon icon-chevron-right"></i>
            </a>
        </li>
    </ul>
);

export default Pagination;