import React from 'react';

const ModuleNextOrPreviosPost = () => {
    return (
        <div className="ps-block--post-navigation">
            <div className="ps-block__left">
                <div className="ps-block__item prev">
                    <i className="feather icon icon-arrow-left"></i>
                    <figure className="prev">
                        <figcaption>Previous</figcaption>
                        <a href="#">The First Tile Of Spring</a>
                    </figure>
                </div>
            </div>
            <div className="ps-block__right">
                <div className="ps-block__item next">
                    <i className="feather icon icon-arrow-right"></i>
                    <figure className="">
                        <figcaption>Next</figcaption>
                        <a href="#">The Kingom of Bantar Gebang</a>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default ModuleNextOrPreviosPost;
