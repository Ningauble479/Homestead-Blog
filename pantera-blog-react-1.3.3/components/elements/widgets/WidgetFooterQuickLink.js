import React from 'react';
import Link from 'next/link';

const WidgetFooterQuickLink = () => {
    return (
        <aside className="ps-widget ps-widget--footer">
            <h4 className="ps-widget__heading">
                <span>Quick Links</span>
            </h4>
            <div className="ps-widget__content">
                <ul className="ps-list">
                    <li>
                        <Link href="/about-us">
                            <a>Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/privacy">
                            <a>Privacy & Policy</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/Terms">
                            <a>Terms & Conditions</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/about">
                            <a>About Me</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default WidgetFooterQuickLink;
