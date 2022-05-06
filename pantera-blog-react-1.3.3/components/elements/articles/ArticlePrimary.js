import React, { useEffect } from 'react';
import Link from 'next/link';
import useCustomPost from '~/hooks/useCustomPost';

const ArticlePrimary = ({ post, classes }) => {
    const { author, categories, createdBy, wideThumbImageUrl, initPost } = useCustomPost();

    useEffect(() => {
        initPost(post);
    }, [post]);

    return (
        <article
            className={`ps-post ps-post--fullscreen bg--cover ${classes && classes}`}
            style={{ backgroundImage: `url(${wideThumbImageUrl})` }}
        >
            <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                <a className="ps-post__overlay"></a>
            </Link>
            <div className="ps-post__content">
                <div className="ps-post__categories">{categories}</div>
                <h4 className="ps-post__title">{post.title}</h4>
                <div className="ps-post__meta">
                    <span>
                        By:{' '}
                        <Link href="/blog">
                            <a>{author}</a>
                        </Link>
                    </span>
                    <span className="ps-post__posted">
                        <i className="feather icon icon-clock"></i> <strong>{createdBy}</strong>
                    </span>
                    <span className="ps-post__posted">
                        <i className="feather icon icon-activity"></i>{' '}
                        <strong>{Math.floor(Math.random() * 100)} Views</strong>
                    </span>
                </div>
                <Link href="/post/[slug]" as={`/post/${post.slug}?layout=sidebar`}>
                    <a className="ps-post__morelink effect--underline">Continue Reading</a>
                </Link>
            </div>
        </article>
    );
};

export default ArticlePrimary;
