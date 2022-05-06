import React, { Component } from 'react';
import CustomLink from '~/components/elements/CustomLink';

class MenuDropdown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { menuData } = this.props;
        let menuViewItem;
        if (menuData.type === 'dynamic') {
            menuViewItem = (
                <CustomLink href={`${menuData.url}/[slug]`} as={`${menuData.url}/${menuData.endpoint}`}>
                    <a>{menuData.text}</a>
                </CustomLink>
            );
        } else {
            menuViewItem = (
                <CustomLink href={menuData.url} as={menuData.alias}>
                    <a>{menuData.text}</a>
                </CustomLink>
            );
        }
        return (
            <li className={menuData.subMenu ? 'menu-item-has-children dropdown' : ''}>
                {menuViewItem}
                {menuData.subMenu ? (
                    <ul className={menuData.subClass}>
                        {menuData.subMenu.map((subMenuItem, index) => (
                            <MenuDropdown menuData={subMenuItem} key={index} />
                        ))}
                    </ul>
                ) : (
                    ''
                )}
            </li>
        );
    }
}

export default MenuDropdown;
