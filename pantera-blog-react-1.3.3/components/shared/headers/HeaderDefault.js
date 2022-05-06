import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import menu from '~/public/data/menu.json';
import MenuDefault from '~/components/shared/menu/MenuDefault';
import Logo from '~/components/elements/Logo';
import { toggleSearchBox } from '~/store/app/action';
import { stickyHeader } from '~/utilities/common-helpers';
import Link from 'next/link';

const HeaderDefault = ({ className }) => {
    const dispatch = useDispatch();

    function handleOpenSearchBox() {
        dispatch(toggleSearchBox(true));
    }

    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    });

    return (
        <header className={`header header--default ${className && className}`} id="header-sticky">
            <div className="container">
                <div className="header__left">
                    <Logo />
                    {className && className.includes('transparent') && (
                        <Link href="/">
                            <a className="ps-logo white">
                                <img src="/static/img/logo-white.svg" alt="Pantera Logo" />
                            </a>
                        </Link>
                    )}
                </div>
                <div className="header__center">
                    <MenuDefault data={menu.primaryMenu} className="menu" />
                </div>
                <div className="header__right">
                    <div className="header__search">
                        <a href="#" className="header__search-btn" onClick={handleOpenSearchBox}>
                            <i className="feather icon icon-search"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default connect()(HeaderDefault);
