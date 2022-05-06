import React from 'react';
import Link from 'next/link';
import { baseUrl } from '~/repositories/Repository';
import ModuleArticleSocialSharing from '~/components/elements/articles/modules/ModuleArticleSocialSharing';
import ModuleArticleTags from '~/components/elements/articles/modules/ModuleArticleTags';
import ModuleArticleCommentForm from '~/components/elements/articles/modules/ModuleArticleCommentForm';
import ModuleArticleCommentListing from '~/components/elements/articles/modules/ModuleArticleCommentListing';
import ModulePostDetailSample from '~/components/elements/articles/modules/ModulePostDetailSample';

const ArticleDetailWithHero = ({ post }) => {
    let partialCategories, newPostContent, tagItems, wideThumbnail;

    if (post) {
        if (post.tags) {
            post.tags.replace(/,/g, '');
            tagItems = post.tags.split(',');
        }

        if (post.wide_thumbnail) {
            wideThumbnail = `${baseUrl}${post.wide_thumbnail.url}`;
        } else {
            wideThumbnail = '/static/img/post-hero/bg.jpg';
        }

        if (post.categories) {
            partialCategories = post.categories.map((item) => (
                <Link href="/category/[slug]" as={`/categories/${item.slug}`} key={item.id}>
                    <a className="ps-post__category">{item.name}</a>
                </Link>
            ));
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
        <div className="ps-post--detail ps-post--detail-with-hero">
            <div className="ps-post__thumbnail" style={{ backgroundImage: `url(${wideThumbnail})` }}></div>
            <div className="ps-post__wrapper">
                <div className="ps-post__header">
                    <div className="ps-post__meta">
                        <span>June 10, 2019</span>
                    </div>
                    <h2>{post.title}</h2>
                </div>
                <div className="ps-post__content">
                    <div className="ps-document">
                        <ModulePostDetailSample />
                        {/* <div dangerouslySetInnerHTML={{ __html: newPostContent }} />*/}
                        <div className="ps-post__footer">
                            <ModuleArticleTags tags={tagItems} />
                            <ModuleArticleSocialSharing />
                        </div>
                    </div>
                    {/*<div className="ps-post__navigation">
                        <ModuleNextOrPreviosPost />
                    </div>*/}
                    <div className="ps-post__comments">
                        <ModuleArticleCommentListing />
                        <ModuleArticleCommentForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetailWithHero;
