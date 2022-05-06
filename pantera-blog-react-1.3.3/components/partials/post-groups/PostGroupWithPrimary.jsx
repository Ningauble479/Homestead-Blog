import React, { useEffect, useState } from 'react';
import HomePostItemListViews from '~/components/partials/homepage/modules/HomePostItemListViews';
import ViewAllPosts from '~/components/elements/ViewAllPosts';
import HomeSidebar from '~/components/partials/homepage/modules/HomeSidebar';
import NextArrow from '~/components/elements/carousels/NextArrow';
import PrevArrow from '~/components/elements/carousels/PrevArrow';
import PostRepository from '~/repositories/PostRepository';
import ArticlePrimary from '~/components/elements/articles/ArticlePrimary';
import ArticleClassic from '~/components/elements/articles/ArticleClassic';
import ArticleGrid from '~/components/elements/articles/ArticleGrid';

const PostGroupWithPrimary = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);
    const [primaryPost, setPrimaryPost] = useState(null);

    async function getPosts() {
        const queries = {
            _limit: 5
        };

        const APIPosts = await PostRepository.getPosts(queries);
        if (APIPosts) {
            setTimeout(function() {
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
    let primaryView, gridPostView;
    if (!loading && posts) {
        primaryView = <ArticleClassic post={posts[0]}/>;
        const postGridItems = posts.map((item, index) => {
            if (index > 0) {
                return (
                    <div className="col-md-6 col-12" key={item.id}>
                        <ArticleGrid post={item}/>
                    </div>
                );
            }
        });
        gridPostView = <div className="row">{postGridItems}</div>;
    }

    return (
        <div className="ps-blog--sidebar">
            <div className="ps-section__left">
                <div className="ps-post-group--primary">
                    <div className="ps-section__post-primary">
                        {primaryView}
                    </div>
                    <div className="ps-section__post-items">
                        {gridPostView}
                    </div>
                </div>
                <ViewAllPosts/>
            </div>
            <div className="ps-section__right">
                <HomeSidebar/>
            </div>
        </div>
    );
};

export default PostGroupWithPrimary;
