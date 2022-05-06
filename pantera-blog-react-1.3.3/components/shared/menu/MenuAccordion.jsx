import React, { useState } from 'react';
import Link from 'next/link';
import SPCollapse from '~/components/basic/Collapse';

const MenuAccordion = ({ data, classes = 'menu' }) => {
    const [isOpen, setIsOpen] = useState(null);
    const handleToggleAccordion = (index) => {
        if (index !== isOpen) {
            setIsOpen(index);
        } else {
            setIsOpen(null);
        }
    };

    return (
        <ul className={classes}>
            {data.map((item) => {
                if (item.subMenu) {
                    return (
                        <li
                            className={`menu__item menu__item--has-children ${
                                isOpen === item.id || item.active === true ? 'active' : ''
                            }`}
                            key={item.id}
                        >
                            <a href="#" className="menu__toggle" onClick={(e) => handleToggleAccordion(item.id)}>
                                <span className="menu__text">
                                    {item.text}
                                </span>
                                <i className="feather icon icon-chevron-down menu__icon--down" />
                            </a>
                            <SPCollapse
                                elementType="div"
                                isOpen={item.id === isOpen || item.active === true ? true : false}
                                aria-hidden={isOpen ? 'false' : 'true'}
                                className="sub-menu-wrapper"
                            >
                                <MenuAccordion data={item.subMenu} classes="sub-menu" />
                            </SPCollapse>
                        </li>
                    );
                } else {
                    if (item.title) {
                        return (
                            <li className="menu__title" key={item.id}>
                                <span>{item.text}</span>
                            </li>
                        );
                    } else {
                        return (
                            <li key={item.id} className="menu__item">
                                <Link href={item.url}>
                                    <a>
                                        <span className="menu__text">{item.text}</span>
                                    </a>
                                </Link>
                            </li>
                        );
                    }
                }
            })}
        </ul>
    );
};

export default MenuAccordion;
