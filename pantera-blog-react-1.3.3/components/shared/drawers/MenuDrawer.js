import React from 'react';
import { Drawer } from 'antd';
import Logo from '~/components/elements/Logo';
import menu from '~/public/data/menu.json';
import { toggleDrawer } from '~/store/app/action';
import { connect, useDispatch } from 'react-redux';
import MenuAccordion from '~/components/shared/menu/MenuAccordion';
import SocialLinksFeather from '~/components/basic/SocialLinksFeather';

const MenuDrawer = (props) => {
    const dispatch = useDispatch();

    function handleClose() {
        dispatch(toggleDrawer(false));
    }

    return (
        <Drawer
            className="ps-drawer"
            placement="right"
            closable={false}
            onClose={false}
            width={350}
            visible={props.isDrawerShow}
        >
            <div className="ps-panel--menu-sidebar">
                <div className="ps-panel__header">
                    <Logo />
                    <a className="ps-drawer__close" onClick={handleClose}>
                        <i className="feather icon icon-x"></i>
                    </a>
                </div>
                <div className="ps-panel__content">
                    <MenuAccordion data={menu.primaryMenu} classes="menu menu--accordion" />
                </div>
                <div className="ps-panel__footer">
                    <SocialLinksFeather />
                </div>
            </div>
        </Drawer>
    );
};

export default connect((state) => state.app)(MenuDrawer);
