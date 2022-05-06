import React from 'react';
import Logo from '~/components/elements/Logo';
import MenuAccordion from '~/components/shared/menu/MenuAccordion';
import menu from '~/public/data/menu.json';
import SocialLinksFeather from '~/components/basic/SocialLinksFeather';

const SidebarDark = () => {
    return (
        <aside className="ps-sidebar--dark">
            <div className="ps-sidebar__header">
                <Logo color="white" />
                <p>Creative React Blog Template</p>
            </div>
            <div className="ps-sidebar__content">
                <div className="ps-sidebar__menu">
                    <MenuAccordion data={menu.primaryMenu} classes="menu menu--accordion menu--accordion-white" />
                </div>
                <div className="ps-sidebar__bottom">
                    <SocialLinksFeather />
                    <p>&copy; 2021. Design by Diaryforlife.</p>
                </div>
            </div>
        </aside>
    );
};

export default SidebarDark;
