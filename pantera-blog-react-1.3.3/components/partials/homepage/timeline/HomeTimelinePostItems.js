import React from 'react';
import {connect} from "react-redux";
import {getPostsByColletionSlug} from "~/utilities/product-helper";
import ArticleSmallThumbnail from "~/components/elements/articles/ArticleSmallThumbail";
import ButtonLoadMore from '~/components/elements/buttons/ButtonLoadMore';

const HomeTimelinePostItems = ({collections, slug}) => {
    let postItems = null, viewPostItems;
    if (collections) {
        postItems = getPostsByColletionSlug(collections, slug);
        if (postItems !== null) {
            viewPostItems = postItems.map(item=> (
                <ArticleSmallThumbnail post={item} key={item.id}/>
            ))
        }
    }
    return(
        <section className="ps-section--home-timeline">
            {/*<div className="ps-section__header">
                <h3>Lastest Posts</h3>
            </div>*/}
            <div className="ps-section__content">
                <div className="ps-post-items">
                    {viewPostItems}
                </div>
            </div>
            <div className="ps-section__pagination text-center">
                <ButtonLoadMore/>
            </div>
        </section>
    )
};
export default connect(state => state.collection)(HomeTimelinePostItems);