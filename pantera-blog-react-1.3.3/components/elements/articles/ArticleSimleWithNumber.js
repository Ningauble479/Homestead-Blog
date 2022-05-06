import React, { useEffect } from 'react';
import Link from 'next/link';
import useCustomPost from '~/hooks/useCustomPost';

const ArticleSimpleWithNumber = ({ post, number }) => {
    const { initPost } = useCustomPost();

    useEffect(() => {
        initPost(post);
    }, [post]);

    return (
        <article className="ps-post ps-post--popular">
            <div className="ps-post__number">
                <span className="ps-post__counter">{number}</span>
            </div>
            <div className="ps-post__content">
                <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                    <a className="ps-post__title"> {post.title}</a>
                </Link>
            </div>
        </article>
    );
};

export default ArticleSimpleWithNumber;
