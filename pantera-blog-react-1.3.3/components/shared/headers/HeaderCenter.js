import React, { useEffect } from 'react';
import Logo from '~/components/elements/Logo';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawer, toggleSearchBox } from '~/store/app/action';
import menu from '~/public/data/menu.json';
import MenuDefault from '~/components/shared/menu/MenuDefault';
import SocialLinksFeather from '~/components/basic/SocialLinksFeather';
import { stickyHeader } from '~/utilities/common-helpers';

const HeaderCenter = () => {
    const dispatch = useDispatch();

    function handleOpenDrawer(e) {
        e.preventDefault;
        dispatch(toggleDrawer(true));
    }

    function handleOpenSearchBox() {
        dispatch(toggleSearchBox(true));
    }

    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    });

    return (
        <header className="header header--center" id="header-sticky">
            <div className="header__top">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <a href="#" className="header__toggle" onClick={(e) => handleOpenDrawer(e)}>
                                <i className="feather icon icon-menu"></i>
                            </a>
                        </div>
                        <div className="header__center">
                            <Logo />
                        </div>
                        <div className="header__right">
                            <SocialLinksFeather />
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navigation">
                <div className="container">
                    <MenuDefault data={menu.primaryMenu} className="menu" />
                    <div className="header__search">
                        <a href="#" className="header__search-btn" onClick={handleOpenSearchBox}>
                            <i className="feather icon icon-search"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default connect()(HeaderCenter);
