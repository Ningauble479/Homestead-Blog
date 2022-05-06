import React from 'react';

const Subscribe = ({ boxed = true }) => {
    if (boxed) {
        return (<section className="ps-section--subscribe">
            <div className="ps-section__left">
                <h3>Subscribe Newsletter</h3>
                <p>Get the latest blog news, trends, street-style snaps, runway coverage, <br/> party reports, and more
                    to your inbox!</p>
            </div>
            <div className="ps-section__right">
                <div className="ps-form--newsletter">
                    <input className="form-control" placeholder="Enter your email..."/>
                    <button className="ps-btn">Subscribe</button>
                </div>
            </div>
        </section>);
    } else {
        return (<section className="ps-section--subscribe fullwidth">
            <div className="container">
                <div className="ps-section__left">
                    <h3>Subscribe Newsletter</h3>
                    <p>Get the latest blog news, trends, street-style snaps, runway coverage, <br/> party reports, and more
                        to your inbox!</p>
                </div>
                <div className="ps-section__right">
                    <div className="ps-form--newsletter">
                        <input className="form-control" placeholder="Enter your email..."/>
                        <button className="ps-btn">Subscribe</button>
                    </div>
                </div>
            </div>

        </section>);
    }

};

export default Subscribe;
