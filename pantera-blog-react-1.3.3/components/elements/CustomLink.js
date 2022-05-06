import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CustomLink = ({ href, as, children }) => {
    const router = useRouter();

    let className = children.props.className || '';
    if (router.pathname === href) {
        className = `${className} link-active`;
    }

    return (
        <Link href={href} as={as}>
            {React.cloneElement(children, { className })}
        </Link>
    );
};

export default CustomLink;
