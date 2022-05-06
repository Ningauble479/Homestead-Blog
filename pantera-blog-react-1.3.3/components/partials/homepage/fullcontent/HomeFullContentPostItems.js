import React from 'react';
import { connect } from 'react-redux';
import { getPostsByColletionSlug } from '~/utilities/product-helper';
import ArticleInside from '~/components/elements/articles/ArticleInside';
import ButtonLoadMore from '~/components/elements/buttons/ButtonLoadMore';

const HomeFullContentPostItems = ({collections, slug}) => {
    let postItems = null, viewPostItems;
    if (collections) {
        postItems = getPostsByColletionSlug(collections, slug);
        if (postItems !== null) {
            viewPostItems = postItems.map(item=> (
                <div className="col-xl-4 col-md-6" key={item.id}>
                    <ArticleInside post={item}/>
                </div>
            ))
        }
        else {
            viewPostItems = <p>No post found.</p>
        }
    }
    return(
        <section className="ps-home-fullcontent-posts">
            <div className="ps-section__items">
                <div className="row">
                    {viewPostItems}
                </div>
            </div>
            <div className="ps-section__pagination text-center">
                <ButtonLoadMore/>
            </div>
        </section>
    )
};

export default connect(state=> state.collection)(HomeFullContentPostItems);