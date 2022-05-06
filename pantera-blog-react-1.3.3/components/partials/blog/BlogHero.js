import React from 'react';

const BlogHero = ({ title, image = '/static/img/hero/about-us.jpg' }) => {
    let componentTitle;
    if (title) {
        componentTitle = title;
    } else {
        componentTitle = 'Life Style';
    }
    return (
        <div className="ps-page__header bg--cover" style={{ backgroundImage: `url(${image})` }}>
            <div className="container">
                <h3>{componentTitle}</h3>
            </div>
        </div>
    );
};

export default BlogHero;
