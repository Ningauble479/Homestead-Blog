import React from 'react';
import Container from '~/components/layouts/Container';
import Link from 'next/link';
import BreadCrumb from '~/components/elements/BreadCrumb';

const AboutUs2Screen = () => {
    const breadcrumb = [
        {
            id: 1,
            text: 'Home',
            url: '/',
        },
        {
            id: 2,
            text: 'About us 2',
            url: '/',
        },
    ];

    return (
        <Container title="About us 2">
            <main className="ps-page">
                <BreadCrumb source={breadcrumb} />
                <div className="ps-page__content">
                    <div className="container">
                        <div className="ps-block--about-2">
                            <div className="ps-block__thumbnail">
                                <img src="/static/img/about.jpg" alt="" />
                            </div>
                            <div className="ps-block__content">
                                <h3>Hi, I'm Erwin Cheryl</h3>
                                <p>
                                    <strong>I'am blogger, photographer & developer.</strong>
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis ea sunt
                                    voluptatum? Assumenda atque commodi consectetur cum cumque, dolore doloremque eaque
                                    ipsam magni optio sit voluptatum! Libero, optio totam!
                                </p>
                                <p>
                                    {' '}
                                    On refusa continuar payar custosi traductores. At solmen va esser necessi far
                                    uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce,
                                    li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent
                                    lingues.{' '}
                                </p>
                            </div>
                            <div className="ps-block__name">
                                <p>Best Regard,</p>
                                <h4>
                                    <Link href="/">
                                        <a>Erwin Cheryl</a>
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Container>
    );
};

export default AboutUs2Screen;
