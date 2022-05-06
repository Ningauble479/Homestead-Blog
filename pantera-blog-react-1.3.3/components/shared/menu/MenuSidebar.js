import React from 'react';
import Link from 'next/link';
import MenuDropdown from "~/components/shared/menu/MenuDropdown";

const MenuSidebar = ({ data, className }) => (
    <ul className={className}>
        {data &&
        data.map(item => {
            if (item.subMenu) {
                return <MenuDropdown menuData={item} key={item.text} />;
            } else {
                return (
                    <li key={item.text}>
                        {item.type === 'dynamic' ? (
                            <Link href={`${item.url}/[pid]`} as={`${item.url}/${item.endPoint}`}>
                                <a>{item.text}</a>
                            </Link>
                        ) : (
                            <Link href={item.url} as={item.alias}>
                                <a>{item.text}</a>
                            </Link>
                        )}
                    </li>
                );
            }
        })}
    </ul>
);

export default MenuSidebar;
