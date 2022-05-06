import React from 'react';

const ListSocialText = () => {
    return (
        <ul className="ps-list--social-text">
            <li>
                <a href="#">
                    <i className="fa fa-facebook"></i>
                    <span>Facebook</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa fa-instagram"></i>
                    <span>Instagram</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa fa-twitter"></i>
                    <span>Twitter</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa fa-youtube-play"></i>
                    <span>Youtube</span>
                </a>
            </li>
        </ul>
    );
};

export default ListSocialText;
