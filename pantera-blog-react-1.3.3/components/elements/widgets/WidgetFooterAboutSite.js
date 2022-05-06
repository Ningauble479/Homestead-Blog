import React from 'react';
import Logo from '~/components/elements/Logo';

const WidgetFooterAboutSite = ({ dark }) => {
    let logoView;
    if (dark && dark === true) {
        logoView = <Logo color="white"/>;
    }
    else {
        logoView = <Logo/>
    }

    return (
        <aside className="ps-widget ps-widget--about-site">
            {logoView}
            <a href="#">helpdesk.diaryforlife@gmail.com</a>
            <p>(+281) 991 1221 5318</p>
        </aside>
    );
};

export default WidgetFooterAboutSite;
