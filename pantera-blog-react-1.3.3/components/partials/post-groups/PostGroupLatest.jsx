import React, { useEffect, useState } from 'react';
import PostRepository from '~/repositories/PostRepository';
import ArticleInside from '~/components/elements/articles/ArticleInside';
import ArticleHorizontalSmall from '~/components/elements/articles/ArticleHorizontalSmall';

const PostGroupLatest = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    async function getPosts() {
        const queries = {
            _limit: 5,
        };

        const APIPosts = await PostRepository.getPosts(queries);
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
    let smallPostView, insidePostView;
    if (!loading && posts) {
        smallPostView = posts.map((item, index) => {
            if (index < 4) {
                return <ArticleHorizontalSmall post={item} key={item.id} />;
            }
        });
        const postGridItems = posts.map((item, index) => {
            if (index > 2) {
                return (
                    <div className="col-md-6 col-12" key={item.id}>
                        <ArticleInside post={item} />
                    </div>
                );
            }
        });
        insidePostView = <div className="row">{postGridItems}</div>;
    }

    return (
        <section className="ps-post-group--latest">
            <div className="ps-section__header">
                <h3>Latest Posts</h3>
            </div>
            <div className="ps-section__content">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="ps-post-items">{smallPostView}</div>
                    </div>
                    <div className="col-md-8 col-sm-12">{insidePostView}</div>
                </div>
            </div>
        </section>
    );
};

export default PostGroupLatest;
