import React from 'react';

const SocialLinksFeather = ({ square = false }) => {
    const links = [
        {
            id: '1',
            icon: 'feather icon icon-facebook',
            classes: 'facebook',
            href: '#',
        },
        {
            id: '2',
            icon: 'feather icon icon-twitter',
            classes: 'twitter',
            href: '#',
        },

        {
            id: '4',
            icon: 'feather icon icon-instagram',
            classes: 'instagram',
            href: '#',
        },
        {
            id: '5',
            icon: 'feather icon icon-linkedin',
            classes: 'linkedin',
            href: '#',
        },
    ];
    let socialView;

    if (square === true) {
        socialView = links.map((item) => (
            <li href={item.href} key={item.id}>
                <a className={item.classes}>
                    <i className={item.icon}></i>
                </a>
            </li>
        ));
        return <ul className="ps-list--social ps-social-links ps-social--link">{socialView}</ul>;
    } else {
        socialView = links.map((item) => (
            <li href={item.href} key={item.id}>
                <a>
                    <i className={item.icon}></i>
                </a>
            </li>
        ));
        return <ul className="ps-list--social ps-social-links">{socialView}</ul>;
    }
};

export default SocialLinksFeather;
