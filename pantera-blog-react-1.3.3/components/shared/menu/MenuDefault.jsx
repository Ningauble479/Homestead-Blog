import React from 'react';
import MenuDropdown from '~/components/shared/menu/MenuDropdown';
import CustomLink from '~/components/elements/CustomLink';

const MenuDefault = ({ data, className }) => (
    <ul className={className}>
        {data &&
            data.map((item) => {
                if (item.subMenu) {
                    return <MenuDropdown menuData={item} key={item.text} />;
                } else {
                    return (
                        <li key={item.text}>
                            {item.type === 'dynamic' ? (
                                <CustomLink href={`${item.url}/[pid]`} as={`${item.url}/${item.endPoint}`}>
                                    <a>{item.text}</a>
                                </CustomLink>
                            ) : (
                                <CustomLink href={item.url}>
                                    <a>{item.text}</a>
                                </CustomLink>
                            )}
                        </li>
                    );
                }
            })}
    </ul>
);

export default MenuDefault;
