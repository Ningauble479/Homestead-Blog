import React from 'react';

const ModuleContactInfo = () => (
    <div className="ps-contact__info">
        <div>
            <div className="ps-section__header">
                <h3>Contact Us</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Ducimus eos impedit nesciunt
                    voluptates magni vero itaque.</p>
            </div>
            <div className="ps-contact__info-content">
                <figure>
                    <figcaption>Address</figcaption>
                    <p>112 Whiblue, Road 112, London, UK</p>
                </figure>
                <figure>
                    <figcaption>Email</figcaption>
                    <p><a href="#">hello@pantera.info</a></p>
                </figure>
                <figure className="phone">
                    <figcaption>Phone</figcaption>
                    <p><strong>+82 112 99872</strong><br/><strong>+82 112 11234</strong></p>

                </figure>
            </div>
        </div>
    </div>
);

export default ModuleContactInfo;