import React, { useEffect } from 'react';
import Subscribe from '~/components/partials/common/Subscribe';
import BlogHero from '~/components/partials/blog/BlogHero';
import Container from '~/components/layouts/Container';
import useGetCategories from '~/hooks/useGetCategories';
import Link from 'next/link';

const CategoriesScreen = () => {
    const { loading, getCategories, categories } = useGetCategories();
    console.log(categories);
    useEffect(() => {
        getCategories({ _limit: 999 });
    }, []);

    //view
    let categoriesView;
    if (!loading) {
        if (categories) {
            if (categories.length > 0) {
                const items = categories.map((item) => (
                    <li key={item.id}>
                        <Link href={`category/${item.slug}`}>
                            <a>{item.name}</a>
                        </Link>
                    </li>
                ));
                categoriesView = <ul className="ps-list">{items}</ul>;
            }
        }
    } else {
        categoriesView = <p>Loading...</p>;
    }

    return (
        <Container title="Our Blog">
            <main className="ps-page ps-page--blog">
                <BlogHero title="Categories" image="/static/img/hero/blog.jpg" />
                <div className="container">
                    <section className="ps-blog">
                        <div className="ps-section__header">
                            <h3>Categories</h3>
                            {categoriesView}
                        </div>
                    </section>
                    <Subscribe />
                </div>
            </main>
        </Container>
    );
};

export default CategoriesScreen;
