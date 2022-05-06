import React from 'react';

const Author = () => (
    <div className="ps-block--author">
        <div className="ps-block__thumbnail">
            <img src="/static/img/user/men.jpg" alt="author"/>
        </div>
        <figure className="ps-block__content">
            <figcaption>Hi, I'm Diaryforlife</figcaption>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, accusantium consequatur. Perspiciatis!</p>
            <small>@diaryforlife</small>
        </figure>
    </div>
);

export default Author;