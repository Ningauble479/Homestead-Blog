import React from 'react';
import Link from 'next/link';

const ModulePostAuthorSmall = () => (
    <div className="ps-post__author">
        <div className="ps-post__author-img">
            <img src="/static/img/user/men.jpg"/>
        </div>
        <div className="ps-post__author-name">
            <Link href="/blog">
               <a>Cheryl Ng</a>
            </Link>
        </div>
    </div>
);

export default ModulePostAuthorSmall;