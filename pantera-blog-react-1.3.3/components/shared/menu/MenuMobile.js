import React, { useState } from 'react';
import { Menu } from 'antd';
import slugify from 'slugify';
import Link from 'next/link';

const MenuLink = ({ data }) => {
    if (data.type === 'dynamic') {
        return (
            <Link href={`${data.url}/[pid]`} as={`${data.url}/${data.endpoint}`}>
                <a>{data.text}</a>
            </Link>
        );
    } else {
        return (
            <Link href={data.url}>
                <a>{data.text}</a>
            </Link>
        );
    }
};

const SubMenuItem = ({ data }) => {
    const { SubMenu } = Menu;
    let subItems = data.subMenu.map((item) => <MenuItem data={item} key={item} />);
    return (
        <SubMenu key={data.text} title={<MenuItem data={data} />}>
            {subItems}
        </SubMenu>
    );
};

const MenuMobile = ({ data }) => {
    const rootSubmenuKeys = convertToKeys(data);
    const { SubMenu } = Menu;
    const [currentOpenKeys, setCurrentOpenKeys] = useState([]);

    function convertToKeys(data) {
        let result = [];
        data.map((item) => {
            if (item.subMenu) {
                result.push(slugify(item.text).toLowerCase());
            }
        });
        return result;
    }

    function onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find((key) => currentOpenKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setCurrentOpenKeys([]);
        } else {
            setCurrentOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    }

    return (
        <Menu mode="inline" className="menu--mobile">
            {data.map((item) => {
                if (item.subMenu) {
                    return (
                        <SubMenu title={<MenuLink data={item} />} key={slugify(item.text).toLowerCase()}>
                            {item.subMenu.map((item) => {
                                if (item.subMenu) {
                                    return (
                                        <SubMenu
                                            title={<MenuLink data={item} />}
                                            key={slugify(item.text).toLowerCase()}
                                        >
                                            {item.subMenu.map((subItem) => (
                                                <Menu.Item key={subItem.text}>
                                                    <MenuLink data={subItem} />
                                                </Menu.Item>
                                            ))}
                                        </SubMenu>
                                    );
                                } else {
                                    return (
                                        <Menu.Item key={item.text}>
                                            <MenuLink data={item} />
                                        </Menu.Item>
                                    );
                                }
                            })}
                        </SubMenu>
                    );
                } else {
                    return (
                        <Menu.Item key={item.text}>
                            <MenuLink data={item} />
                        </Menu.Item>
                    );
                }
            })}
        </Menu>
    );
};

export default MenuMobile;
