import React from 'react';

import Logo from '~/components/elements/Logo';
import ListSocialText from '~/components/elements/basic/ListSocialText';
import Link from 'next/link';

const FooterSimple = () => {
    return (
        <footer className="ps-footer ps-footer--simple">
            <div className="ps-footer__top">
                <div className="container">
                    <Logo color="white" />
                    <ListSocialText />
                </div>
            </div>
            <div className="ps-footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ps-footer__copyright">
                                <p>
                                    &copy; 2021. Copyright <strong>Diaryforlife</strong>. Allright reverved.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ps-footer__links">
                                <ul className="menu--footer">
                                    <li>
                                        <Link href="/page/about-us">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/page/contact-us">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSimple;
