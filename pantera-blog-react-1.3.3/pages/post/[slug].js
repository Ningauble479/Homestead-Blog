import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RelatedPosts from '~/components/partials/post/RelatedPosts';
import Container from '~/components/layouts/Container';
import PostRepository from '~/repositories/PostRepository';
import ArticleDetailWithHero from '~/components/elements/articles/ArticleDetailWithHero';
import SkeletonPostDetailWithHero from '~/components/elements/skeletons/SkeletonPostDetailWithHero';

const PostDetailScreen = () => {
    const Router = useRouter();
    const { slug } = Router.query;
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getPost(slug) {
        const responseData = await PostRepository.getPostBySlug(slug);
        if (responseData) {
            setPost(responseData);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                500
            );
        }
        return responseData;
    }

    async function getProductOnChangeURL(url) {
        const nextPid = url.split('/').pop();
        if (nextPid !== '' && isNaN(parseInt(nextPid)) === false) {
            setLoading(true);
            await getPost(nextPid);
        }
    }

    useEffect(() => {
        if (slug) {
            getPost(slug);
        }

        Router.events.on('routeChangeStart', getProductOnChangeURL);
        return () => {
            Router.events.off('routeChangeStart', getProductOnChangeURL);
        };
    }, [slug]);

    //Views
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
            text: post ? post.title : 'Post detail',
        },
    ];

    let postDetailView;
    if (!loading) {
        if (post) {
            postDetailView = <ArticleDetailWithHero post={post} />;
        } else {
        }
    } else {
        postDetailView = <SkeletonPostDetailWithHero />;
    }

    return (
        <Container title={post ? post.title : 'Post Detail'}>
            <main className="ps-page ps-page--blog">
                <main className="ps-page ps-page--single-post">
                    {postDetailView}
                    <RelatedPosts slug="home-featured-posts" />
                </main>
            </main>
        </Container>
    );
};

export default PostDetailScreen;
