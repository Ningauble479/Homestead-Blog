import React from 'react';
import Link from 'next/link';

const BreadCrumb = ({ source, classes, fullwidth }) => {
    let breadCrumbView;
    if (source) {
        breadCrumbView = source.map((item) => (
            <li key={item.text}>
                {item.url ? (
                    <Link href={item.url}>
                        <a>{item.text}</a>
                    </Link>
                ) : (
                    <span>{item.text}</span>
                )}
            </li>
        ));
    }
    return (
        <div className="ps-breadcrumb">
            <div className={fullwidth === true ? 'container-fluid' : 'container'}>
                <ul className={`breadcrumb ${classes && classes}`}>{breadCrumbView}</ul>
            </div>
        </div>
    );
};

export default BreadCrumb;
