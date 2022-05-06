import React from 'react';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import { fadeIn } from '~/utilities/animation';
import { motion } from 'framer-motion';
import Head from 'next/head';
import FooterSecond from '~/components/shared/footers/FooterSecond';

const Container = ({ children, title, header = <HeaderDefault />, footer = <FooterSecond classes="dark" /> }) => {
    let titleView;
    if (title !== null) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <motion.div key="homepage" initial="initial" animate="enter" exit="exit">
            <Head>
                <title>{titleView}</title>
            </Head>
            <motion.div variants={fadeIn}>
                {header}
                {children}
                {footer}
            </motion.div>
        </motion.div>
    );
};

export default Container;
