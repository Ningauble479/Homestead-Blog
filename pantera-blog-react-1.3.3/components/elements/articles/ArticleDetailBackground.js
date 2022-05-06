import React from 'react';
import Link from 'next/link';
import { baseUrl } from '~/repositories/Repository';
import ModuleArticleSocialSharing from '~/components/elements/articles/modules/ModuleArticleSocialSharing';
import ModuleArticleTags from '~/components/elements/articles/modules/ModuleArticleTags';

const ArticleDetailBg = ({ post }) => {
    let partialCategories, newPostContent, tagItems, wideThumbnail;

    if (post) {
        if (post.tags) {
            post.tags.replace(/,/g, '');
            tagItems = post.tags.split(',');
        }

        if (post.wide_thumbnail) {
            wideThumbnail = `${baseUrl}${post.wide_thumbnail.url}`
        }
        else {
            wideThumbnail = '/static/img/post-hero/bg.jpg'
        }

        if (post.categories) {
            partialCategories = post.categories.map(item => (
                <Link href="/category/[slug]" as={`/categories/${item.slug}`} key={item.id}>
                    <a className="ps-post__category">{item.name}</a>
                </Link>
            ));
        }
        if (post.content.match(/<img/)) {
            newPostContent = post.content.replace(/<img([^>]*)\ssrc=(['"])(?:[^\2\/]*\/)*([^\2]+)\2/gi, `<img$1 src=$2${baseUrl}/uploads/$3$2`);
        } else {
            newPostContent = post.content;
        }
    }

    return (
        <div className="ps-post--detail ps-post--detail-has-bg">
            <div className="ps-post__header" style={{ backgroundImage: `url(${wideThumbnail})` }}>
                <div className="ps-post__header-wrapper">
                    {partialCategories}
                    <h2>{post.title}</h2>
                    <div className="ps-post__meta">
                    <span>Author:
                        <a href="#"> {post.created_by.firstname} {post.created_by.lastname}</a>
                    </span>
                        <span> Published in:
                        <a href="#"> June 10, 2019</a>
                    </span>
                    </div>
                </div>
            </div>
            <div className="ps-post__wrapper">
                <div className="ps-post__content ps-document">
                    <div dangerouslySetInnerHTML={{ __html: newPostContent }}/>
                </div>
                <div className="ps-post__footer">
                    <ModuleArticleTags tags={tagItems}/>
                    <ModuleArticleSocialSharing/>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetailBg;