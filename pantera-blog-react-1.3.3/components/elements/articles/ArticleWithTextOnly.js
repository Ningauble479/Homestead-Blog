import React, { useEffect } from 'react';
import Link from 'next/link';
import useCustomPost from '~/hooks/useCustomPost';

const ArticleWithTextOnly = ({ post }) => {
    const { categories, author, createdBy, thumbnail, title, initPost } = useCustomPost();

    useEffect(() => {
        initPost(post);
    }, [post]);

    return (
        <article className="ps-post ps-post--grid ps-post--text-only">
            <div className="ps-post__content">
                <div className="ps-post__categories">{categories}</div>
                {title}
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
                <div className="ps-post__short-desc">
                    <p>{post.description && post.description.slice(0, 100) + '...'}</p>
                </div>
                <div className="ps-post__footer">
                    <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                        <a className="ps-post__morelink effect--underline">Read More</a>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default ArticleWithTextOnly;
