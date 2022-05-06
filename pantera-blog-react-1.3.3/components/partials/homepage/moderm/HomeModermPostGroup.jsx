import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PostRepository from '~/repositories/PostRepository';
import ArticleList from '~/components/elements/articles/ArticleList';
import ArticleInside from '~/components/elements/articles/ArticleInside';
import ArticleGrid from '~/components/elements/articles/ArticleGrid';

const HomeModermPostGroup = ({ collectionSlug }) => {
    const categories = [
        {
            name: 'All',
            slug: '',
        },
        {
            name: 'Life Style',
            slug: 'life-style',
        },
        {
            name: 'Travel',
            slug: 'travel',
        },
        { name: 'technology', slug: 'technology' },
    ];
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    async function getPosts() {
        let queries, APIPosts;
        if (collectionSlug && collectionSlug !== '') {
            queries = {
                slug_eq: collectionSlug,
            };
            APIPosts = await PostRepository.SPGetPostItemOfCollectionBySlug(queries);
        } else {
            queries = {
                _limit: 6,
            };
            APIPosts = await PostRepository.getPosts(queries);
        }

        if (APIPosts) {
            setTimeout(function () {
                setLoading(false);
            }, 200);
            setPosts(APIPosts);
            return APIPosts;
        } else {
            setPosts(null);
            return null;
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    // Views
    let categoriesView, postsView;
    categoriesView = categories.map((item) => (
        <li className={item.name === currentCategory.name ? 'active' : ''} key={item.name}>
            <Link href={item.slug}>
                <a>{item.name}</a>
            </Link>
        </li>
    ));

    if (!loading) {
        if (posts && posts.length > 0) {
            postsView = posts.map((item, index) => {
                if (index === 0) {
                    return (
                        <div className="col-lg-6 col-sm-12" key={item.id}>
                            <ArticleInside post={item} />
                        </div>
                    );
                } else if (index > 0 && index < 3) {
                    return (
                        <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
                            <ArticleGrid post={item} />
                        </div>
                    );
                }
            });
        } else {
            postsView = <p>No post found.</p>;
        }
    } else {
        postsView = <p>Loading...</p>;
    }
    return (
        <section className="ps-post-group--moderm">
            <div className="container">
                <div className="ps-section__header">
                    <ul className="ps-list ps-list--with-button">{categoriesView}</ul>
                </div>
                <div className="ps-section__content">
                    <div className="row">{postsView}</div>
                </div>
            </div>
        </section>
    );
};

export default HomeModermPostGroup;
