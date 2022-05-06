import React, { useEffect } from 'react';
import Link from 'next/link';
import { baseUrl } from '~/repositories/Repository';
import ModuleArticleSocialSharing from '~/components/elements/articles/modules/ModuleArticleSocialSharing';
import ModuleArticleTags from '~/components/elements/articles/modules/ModuleArticleTags';
import ModuleArticleCommentForm from '~/components/elements/articles/modules/ModuleArticleCommentForm';
import ModuleArticleCommentListing from '~/components/elements/articles/modules/ModuleArticleCommentListing';
import ModulePostDetailSample from '~/components/elements/articles/modules/ModulePostDetailSample';
import BreadCrumb from '~/components/elements/BreadCrumb';
import useCustomPost from '~/hooks/useCustomPost';

const DetailWithHero2 = ({ post }) => {
    let partialCategories, newPostContent, tagItems, wideThumbnail;
    const { categories, author, createdBy, thumbnail, title, initPost } = useCustomPost();

    useEffect(() => {
        initPost(post);
    }, [post]);

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
    }

    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Blog',
            url: '/blog',
        },
        {
            text: post ? post.title : 'Post with hero 2',
        },
    ];

    return (
        <div className="ps-post--detail ps-post--detail-with-hero ps-second">
            <div className="ps-post__thumbnail" style={{ backgroundImage: `url(${wideThumbnail})` }}>
                <BreadCrumb source={breadcrumb} />
                <div className="ps-post__header">
                    <h2>{post.title}</h2>
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
                </div>
            </div>
            <div className="ps-post__wrapper">
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

export default DetailWithHero2;
