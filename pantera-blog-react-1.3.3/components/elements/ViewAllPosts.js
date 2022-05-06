import React from 'react';
import Link from 'next/link';

const ViewAllPosts = () => {
    return (
        <div className="ps-section__pagination ps-loadmore">
            <Link href="/blog">
                <a className="effect--underline">View All Posts</a>
            </Link>
        </div>
    );
};

export default ViewAllPosts;
