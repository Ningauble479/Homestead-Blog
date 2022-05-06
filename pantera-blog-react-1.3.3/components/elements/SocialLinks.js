import React from 'react';

const SocialLinks = () => {
    const links = [
        {
            id: '1',
            icon: 'fa fa-facebook',
            href: '#',
        },
        {
            id: '2',
            icon: 'fa fa-twitter',
            href: '#',
        },
        {
            id: '3',
            icon: 'fa fa-youtube-play',
            href: '#',
        },
        {
            id: '4',
            icon: 'fa fa-linkedin',
            href: '#',
        },
    ];
    const linksArea = links.map((item) => (
        <li href={item.href} key={item.id}>
            <a>
                <i className={item.icon}></i>
            </a>
        </li>
    ));
    return <ul className="ps-list--social ps-social-links">{linksArea}</ul>;
};

export default SocialLinks;
