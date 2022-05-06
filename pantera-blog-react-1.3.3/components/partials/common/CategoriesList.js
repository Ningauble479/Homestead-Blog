import React from 'react';
import Link from "next/link";

const CategoriesList = ({hasContainer}) => {
    const items = [
        'Recent Articles',
        'Beauty',
        'Business',
        'Fashion',
        'Travel',
        'Food',
        'Technology',
    ];
    let listView = items.map(item=> (
        <Link href="/categories" key={item}>
            <a className="ps">{item}</a>
        </Link>
    ))
    if (hasContainer === true) {
        return(
            <section className="ps-categories-list">
                <div className="container">
                    <div className="ps-block--categories-list">
                        {listView}
                    </div>
                </div>
            </section>
        )
    }
    else {
        return(
            <section className="ps-categories-list">
                <div className="ps-block--categories-list">
                    {listView}
                </div>
            </section>
        )
    }
};

export default CategoriesList;