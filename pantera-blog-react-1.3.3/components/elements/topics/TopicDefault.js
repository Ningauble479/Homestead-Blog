import React from 'react';
import Link from 'next/link';

const TopicDefault = ({ title, img }) => {
    return (
        <article className="ps-block--topic">
            <img src={img} />
            <Link href="/blog">
                <a className="ps-block__overlay"></a>
            </Link>
            <div className="ps-block__content">
                <Link href="/blog">
                    <a className="ps-block__title">{title}</a>
                </Link>
            </div>
        </article>
    );
};

export default TopicDefault;
