import React from 'react';
import SocialLinks from '~/components/elements/SocialLinks';
import Logo from '~/components/elements/Logo';
import { useDispatch } from 'react-redux';
import { toggleDrawer } from '~/store/app/action';

const HeaderMobile = () => {
    const dispatch = useDispatch();
    function handleOpenDrawer(e) {
        e.preventDefault();
        dispatch(toggleDrawer(true));
    }
    return (
        <header className="header header--center header--mobile">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__left">
                        <Logo />
                    </div>
                    <div className="header__right">
                        <a href="#" className="header__toggle" onClick={(e) => handleOpenDrawer(e)}>
                            <i className="feather icon icon-menu"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderMobile;
