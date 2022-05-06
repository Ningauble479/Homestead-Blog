import React from 'react';
import { connect } from 'react-redux';
import ArticleSmallThumbnail from '~/components/elements/articles/ArticleSmallThumbail';

const SearchResult = ({ searchResult }) => {
    let searchItems;
    if (searchResult.length > 0) {
        searchItems = searchResult.map((item) => <ArticleSmallThumbnail post={item} key={item.id} />);
    }
    else {
        searchItems = <p>Not found.</p>
    }
    return <div className="ps-search-result-items">{searchItems}</div>;
};

export default connect((state) => state.post)(SearchResult);
