import React from 'react';
import Head from 'next/head';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import FooterSimple from '~/components/shared/footers/FooterSimple';
import FooterSecond from '~/components/shared/footers/FooterSecond';
import { motion } from 'framer-motion';
import { fadeIn } from '~/utilities/animation';
import InstagramImages from '~/components/partials/common/InstagramImages';

const ContainerHomePersonal = ({ children, title }) => {
    let titleView;
    if (title !== null) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | Home Personal';
    }

    return (
        <motion.div
            variants={fadeIn}>
            <Head>
                <title>{titleView}</title>
            </Head>
            <HeaderDefault />
            {children}
            <InstagramImages/>
            <FooterSecond classes="dark"/>
        </motion.div>
       /* <div className="pantera-blog-wrapper">
            <Head>
                <title>{titleView}</title>
            </Head>
            <HeaderDefault />
            {children}
            <FooterSecond classes="dark" />
        </div>*/
    );
};

export default ContainerHomePersonal;
