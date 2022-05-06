import React, { useState } from 'react';
import SPCollapse from '~/components/elements/Collapse';

const ModuleMenuCollapse = (data) => {
    const [isOpen, setIsOpen] = useState(null);

    const handleToggleAccordion = (index) => {
        setIsOpen(index);
    };
    const menuItemsView = data.map((item) => {
        if (item.subMenu) {
            <li className="menu-item-has-children">
                <a href="#" className="menu__toggle" onClick={(e) => handleToggleAccordion(index)}>
                    <span>{data.text}</span>
                </a>
                <SPCollapse
                    elementType="div"
                    isOpen={index === isOpen ? true : false}
                    aria-hidden={isOpen ? 'false' : 'true'}
                    className="sub-menu-wrapper collapse-css-transition"
                >
                    {(collapseState) => (
                        <ul className={`sub-menu ${collapseState}`}>
                            {data.subMenu.map((subItem) => {
                                if (subItem.subMenu) {
                                    return <ModuleMenuCollapse data={subItem.subMenu} key={subItem.id} />;
                                } else {
                                    return (
                                        <li key={subItem.id}>
                                            <a href="#">
                                                <span>{subItem.text}</span>
                                            </a>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    )}
                </SPCollapse>
            </li>;
        } else {
        }
    });

    return <ul className="sub-menu menu--accordion">{menuItemsView}</ul>;
};

export default ModuleMenuCollapse;
