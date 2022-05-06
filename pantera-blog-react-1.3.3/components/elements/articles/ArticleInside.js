import React, { useEffect } from 'react';
import Link from 'next/link';
import useCustomPost from '~/hooks/useCustomPost';

const ArticleInside = ({ post, classes }) => {
    const { createdBy, thumbnail, title, initPost } = useCustomPost();

    useEffect(() => {
        initPost(post);
    }, [post]);

    return (
        <article className={`ps-post ps-post--inside ${classes}`}>
            <div className="ps-post__thumbnail">
                <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                    <a className="ps-post__overlay"></a>
                </Link>
                {thumbnail}
            </div>
            <div className="ps-post__content">
                <div className="ps-post__meta">
                    <span className="ps-post__posted">{createdBy}</span>
                </div>
                {title}
            </div>
        </article>
    );
};

export default ArticleInside;
