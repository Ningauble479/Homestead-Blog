import React, { useEffect } from 'react';
import { wrapper } from '../store/store';
import MasterLayout from '../components/layouts/MasterLayout';
import '~/scss/style.scss';
import 'antd/dist/antd.min.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { toggleDrawer } from '~/store/app/action';
import { useDispatch } from 'react-redux';

function App({ Component, pageProps }) {
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        const handleRouteChange = () => {
            dispatch(toggleDrawer(false));
        };
        setTimeout(function () {
            document.getElementById('__next').classList.add('loaded');
        }, 100);
        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    });

    return (
        <MasterLayout>
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.pathname} />
            </AnimatePresence>
        </MasterLayout>
    );
}

export default wrapper.withRedux(App);
