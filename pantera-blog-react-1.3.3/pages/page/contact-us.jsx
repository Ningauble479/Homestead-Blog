import React, { useEffect } from 'react';
import ModuleContactInfo from '~/components/partials/page/modules/ModuleContactInfo';
import ModuleContactForm from '~/components/partials/page/modules/ModuleContactForm';
import BlogHero from '~/components/partials/blog/BlogHero';
import { useDispatch } from 'react-redux';
import { getInstagram } from '~/store/media/action';
import { toggleDrawer } from '~/store/app/action';
import Container from '~/components/layouts/Container';

const ContactUsPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInstagram(1));
        dispatch(toggleDrawer(false));
    }, [dispatch]);

    return (
        <Container title="Contact Us">
            <main className="ps-page">
                <BlogHero title="Contact Us" image="/static/img/hero/contact-us.jpg" />
                <div className="ps-page__content">
                    <section className="ps-contact">
                        <div className="container">
                            <ModuleContactInfo />
                            <ModuleContactForm />
                        </div>
                    </section>
                </div>
            </main>
        </Container>
    );
};

export default ContactUsPage;
