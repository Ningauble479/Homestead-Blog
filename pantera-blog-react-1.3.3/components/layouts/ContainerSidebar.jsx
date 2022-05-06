import React from 'react';
import Head from 'next/head';
import FooterSimple from '~/components/shared/footers/FooterSimple';
import SidebarDark from '~/components/shared/sidebars/SidebarDark';
import { fadeIn } from '~/utilities/animation';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import InstagramImages from '~/components/partials/common/InstagramImages';
import FooterSecond from '~/components/shared/footers/FooterSecond';
import { motion } from 'framer-motion';

const LayoutHomeDefault = ({ children, title }) => {
    let titleView;
    if (title !== null) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <motion.div
            variants={fadeIn}>
            <Head>
                <title>{titleView}</title>
            </Head>

            <div className="ps-page--sidebar">
                <div className="ps-page__sidebar">
                    <SidebarDark/>
                </div>
                <div className="ps-page__wrapper">
                    {children}
                    <FooterSimple/>
                </div>
            </div>
        </motion.div>
    );
};

export default LayoutHomeDefault;
