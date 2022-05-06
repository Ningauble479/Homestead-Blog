import React, { useEffect } from 'react';

import BlogHero from '~/components/partials/blog/BlogHero';
import HomeSidebar from '~/components/partials/homepage/modules/HomeSidebar';
import { useRouter } from 'next/router';
import Container from '~/components/layouts/Container';
import useGetCategories from '~/hooks/useGetCategories';
import ArticleGrid from '~/components/elements/articles/ArticleGrid';

const CatgoryScreen = () => {
    const Router = useRouter();
    const { slug } = Router.query;
    const { loading, getCategory, category } = useGetCategories();

    useEffect(() => {
        if (slug !== undefined) {
            getCategory(slug);
        }
    }, [slug]);

    // Views
    let postItemsView;
    if (!loading) {
        if (category) {
            if (category.posts.length > 0) {
                const postItems = category.posts.map((item) => {
                    return (
                        <div className="col-md-6 col-12" key={item.id}>
                            <ArticleGrid post={item} />
                        </div>
                    );
                });
                postItemsView = <div className="row">{postItems}</div>;
            }
        } else {
            postItemsView = <p>No post found.</p>;
        }
    } else {
        postItemsView = <p>Loading...</p>;
    }
    return (
        <Container title="Category">
            <main className="ps-page ps-page--blog">
                <BlogHero title={category ? category.name : 'Category'} />
                <div className="container">
                    <section className="ps-blog--sidebar">
                        <div className="ps-section__left">{postItemsView}</div>
                        <div className="ps-section__right">
                            <HomeSidebar />
                        </div>
                    </section>
                </div>
            </main>
        </Container>
    );
};

export default CatgoryScreen;
