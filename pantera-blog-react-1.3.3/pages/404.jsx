import React from 'react';
import Link from 'next/link';
import Logo from '~/components/elements/Logo';

function Error({ statusCode }) {
    return (
        <div className="site-content">
            <div className="ps-page--404">
                <div className="ps-page__wrapper">
                    <div className="ps-page__header">
                        <Logo />
                    </div>
                    <div className="ps-page__message" style={{ backgroundImage: `url(/static/img/bg/404.jpg)` }}>
                        <div>
                            <h4>404</h4>
                            <p>Page not found.</p>l
                        </div>
                    </div>
                    <div className="ps-page__content">
                        <p>
                            We couldn't find the page you're looking for. Try searching or go back to the
                            <Link href="/">
                                <a> Homepage</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error;
