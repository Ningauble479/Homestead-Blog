import React, { useState, useEffect } from 'react';
import RelatedPosts from '~/components/partials/post/RelatedPosts';
import ArticleDetail from '~/components/elements/articles/ArticleDetail';
import HomeSidebar from '~/components/partials/homepage/modules/HomeSidebar';
import Container from '~/components/layouts/Container';
import BreadCrumb from '~/components/elements/BreadCrumb';
import { useRouter } from 'next/router';
import PostRepository from '~/repositories/PostRepository';

const PostDetailPage = () => {
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
                250
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
            postDetailView = <ArticleDetail post={post} />;
        } else {
        }
    } else {
        postDetailView = <p>Loading...</p>;
    }

    return (
        <Container title={post ? post.title : 'Post detail with sidebar'}>
            <main className="ps-page ps-page--blog">
                <BreadCrumb source={breadcrumb} />
                <div className="container">
                    <section className="ps-blog--sidebar reversed">
                        <div className="ps-section__left">{postDetailView}</div>
                        <div className="ps-section__right">
                            <HomeSidebar />
                        </div>
                    </section>
                    <RelatedPosts collectionSlug="home-featured-posts" />
                </div>
            </main>
        </Container>
    );
};

export default PostDetailPage;
