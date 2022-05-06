import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import menu from '~/public/data/menu.json';
import MenuDefault from '~/components/shared/menu/MenuDefault';
import Logo from '~/components/elements/Logo';
import { toggleDrawer, toggleSearchBox } from '~/store/app/action';
import { stickyHeader } from '~/utilities/common-helpers';
import Link from 'next/link';
import SocialLinks from '~/components/elements/SocialLinks';
import SocialLinksFeather from '~/components/basic/SocialLinksFeather';

const HeaderSimple = ({ className }) => {
    const dispatch = useDispatch();

    function handleOpenSearchBox() {
        dispatch(toggleSearchBox(true));
    }
    function handleOpenDrawer(e) {
        e.preventDefault;
        dispatch(toggleDrawer(true));
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
                    <a href="#" className="header__toggle" onClick={(e) => handleOpenDrawer(e)}>
                        <i className="feather icon icon-menu"></i>
                    </a>
                    <Logo />
                </div>
                <div className="header__center">
                    <MenuDefault data={menu.primaryMenu} className="menu" />
                </div>
                <div className="header__right">
                    <SocialLinksFeather />
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

export default connect()(HeaderSimple);
