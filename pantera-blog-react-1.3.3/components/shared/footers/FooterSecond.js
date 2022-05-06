import React from 'react';
import SocialLinks from '~/components/elements/SocialLinks';
import WidgetFooterCategories from '~/components/elements/widgets/WidgetFooterCategories';
import WidgetFooterAboutSite from '~/components/elements/widgets/WidgetFooterAboutSite';
import WidgetFooterAddress from '~/components/elements/widgets/WidgetFooterAddress';
import WidgetFooterQuickLink from '~/components/elements/widgets/WidgetFooterQuickLink';

const FooterSecond = ({ classes }) => {
    return (
        <footer className={`ps-footer ps-footer--second ${classes && classes}`}>
            <div className="ps-footer__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <WidgetFooterAboutSite dark={true} />
                        </div>
                        <div className="col-lg-3 col-6">
                            <WidgetFooterCategories />
                        </div>
                        <div className="col-lg-3 col-6">
                            <WidgetFooterQuickLink />
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <WidgetFooterAddress />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ps-footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ps-footer__copyright">
                                <p>
                                    &copy; 2020 Copyright{' '}
                                    <a href="http://pantera-react.diaryforlife.com">Diaryforlife</a>. Allright reverved.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ps-footer__social">
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSecond;
