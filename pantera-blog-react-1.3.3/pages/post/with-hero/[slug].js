import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import RelatedPosts from '~/components/partials/post/RelatedPosts';
import Container from '~/components/layouts/Container';
import SkeletonPostDetailWithHero from '~/components/elements/skeletons/SkeletonPostDetailWithHero';
import useGetPosts from '~/hooks/useGetPosts';
import DetailWithHero2 from '~/components/elements/detail/DetailWithHero2';

const PostDetailScreen = () => {
    const Router = useRouter();
    const { slug } = Router.query;
    const { loading, post, getPost } = useGetPosts();

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

    let postDetailView;
    if (!loading) {
        if (post) {
            postDetailView = <DetailWithHero2 post={post} />;
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
