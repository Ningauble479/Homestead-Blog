import React from 'react';
import Link from 'next/link';

import ModuleArticleTags from '~/components/elements/articles/modules/ModuleArticleTags';
import ModuleArticleSocialSharing from '~/components/elements/articles/modules/ModuleArticleSocialSharing';
import { baseUrl } from '~/repositories/Repository';
import ModulePostDetailSample from '~/components/elements/articles/modules/ModulePostDetailSample';
import ModuleArticleCommentListing from '~/components/elements/articles/modules/ModuleArticleCommentListing';
import ModuleArticleCommentForm from '~/components/elements/articles/modules/ModuleArticleCommentForm';

const ArticleDetail = ({ post }) => {
    //Views
    let categoriesView, newPostContent, tagItems;
    if (post) {
        if (post.tags) {
            post.tags.replace(/,/g, '');
            tagItems = post.tags.split(',');
        }
        if (post.categories) {
            if (post.categories.length > 0) {
                categoriesView = post.categories.map((item) => (
                    <Link href="/category/[slug]" as={`/categories/${item.slug}`} key={item.id}>
                        <a className="ps-post__category">{item.name}</a>
                    </Link>
                ));
            } else {
                categoriesView = (
                    <Link href="/blog">
                        <a className="ps-post__category">Others</a>
                    </Link>
                );
            }
        } else {
            categoriesView = (
                <Link href="/blog">
                    <a className="ps-post__category">Others</a>
                </Link>
            );
        }
        if (post.content.match(/<img/)) {
            newPostContent = post.content.replace(
                /<img([^>]*)\ssrc=(['"])(?:[^\2\/]*\/)*([^\2]+)\2/gi,
                `<img$1 src=$2${baseUrl}/uploads/$3$2`
            );
        } else {
            newPostContent = post.content;
        }
    }

    return (
        <div className="ps-post--detail ps-post--detail-simple">
            <div className="ps-post__header">
                {categoriesView}
                <h2>{post.title}</h2>
                <div className="ps-post__meta">
                    <p>
                        Post by:
                        <a href="#">
                            {post.created_by.firstname} {post.created_by.lastname}
                        </a>
                    </p>
                    <p>
                        <span>
                            Published in:
                            <strong>June 10, 2019</strong>
                        </span>
                        <span>
                            Comments:<strong>12</strong>
                        </span>
                        <span>
                            View: <strong>335</strong>
                        </span>
                    </p>
                </div>
            </div>
            {/*Replace your content here*/}
            <ModulePostDetailSample />
            {/*<div className="ps-post__content ps-document">
                <div dangerouslySetInnerHTML={{ __html: newPostContent }} />
            </div>*/}
            <div className="ps-post__footer">
                <ModuleArticleTags tags={tagItems} />
                <ModuleArticleSocialSharing />
            </div>
            <div className="ps-post__comments">
                <ModuleArticleCommentListing />
                <ModuleArticleCommentForm />
            </div>
        </div>
    );
};

export default ArticleDetail;
