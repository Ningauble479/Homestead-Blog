import React from 'react';
import LazyLoad from 'react-lazyload';
import { baseUrl } from '~/repositories/Repository';
import Link from 'next/link';
import Moment from 'moment';

export const StrapiPostThumbnail = (post) => {
    let view;
    if (post && post.thumbnail) {
        view = (
            <LazyLoad>
                <img src={`${baseUrl}${post.thumbnail.url}`} />
            </LazyLoad>
        );
    }
    return view;
};

export const StrapiPostTitle = (post) => {
    let view;
    if (post) {
        view = (
            <h4 className="ps-post__title">
                <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                    <a>{post.title}</a>
                </Link>
            </h4>
        );
    }
    return view;
};
