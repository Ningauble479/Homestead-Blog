import React from 'react';
import { connect } from 'react-redux';
import ArticleGrid from '~/components/elements/articles/ArticleGrid';
import { getPostsByCategorySlug } from '~/utilities/product-helper';

const CategoryPostItems = ({ categories, slug, column }) => {
    let postItems = null,
        viewPostItems;
    if (categories && categories.length > 0) {
        postItems = getPostsByCategorySlug(categories, slug);
        if (postItems !== null) {
            viewPostItems = postItems.map((item) => {
                if (column === '3') {
                    return (
                        <div className=" col-md-4 col-sm-6" key={item.id}>
                            <ArticleGrid post={item} />
                        </div>
                    );
                } else if (column === '4') {
                    return (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                            <ArticleGrid post={item} />
                        </div>
                    );
                } else {
                    return (
                        <div className="col-md-6" key={item.id}>
                            <ArticleGrid post={item} />
                        </div>
                    );
                }
            });
        }
    }
    return (
        <div className="ps-blog--post-items">
            <div className="row">{viewPostItems}</div>
        </div>
    );
};

export default connect((state) => state.collection)(CategoryPostItems);
