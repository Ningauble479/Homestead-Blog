import React, { useEffect } from 'react';
import Link from 'next/link';
import useCustomPost from '~/hooks/useCustomPost';

const ArticleSmallThumbnail = ({ post }) => {
    const { createdBy, author, thumbnail, title, initPost } = useCustomPost();

    useEffect(() => {
        initPost(post);
    }, [post]);

    return (
        <article className="ps-post ps-post--horizontal ps-post--small-thumbnail">
            <div className="ps-post__thumbnail">
                <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                    <a className="ps-post__overlay"></a>
                </Link>
                {thumbnail}
            </div>
            <div className="ps-post__wrapper">
                <div className="ps-post__content">
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
                        <p>{post.description}</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ArticleSmallThumbnail;
