import React from 'react';

const ModuleContactForm = () => (
    <div className="ps-contact__form">
        <div className="row">
            <div className="col-md-6">
                <form className="ps-form--contact">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control" type="text" placeholder=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                            <div className="form-group">
                                <label>Emai</label>
                                <input className="form-control" type="email" placeholder=""/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input className="form-control" type="email" placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label>Your Message</label>
                        <textarea className="form-control" rows="6" placeholder=""/>
                    </div>
                    <div className="form-group ps-form__submit">
                        <button className="ps-btn ps-btn--black">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-md-6">
                <div className="ps-contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14049.340485982573!2d-0.12031301106485542!3d51.50228117351734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce176ac979%3A0x42af85654e23a0b4!2sThe%20National%20Gallery!5e0!3m2!1sen!2s!4v1582441665587!5m2!1sen!2s"
                        height={500}></iframe>
                </div>
            </div>
        </div>
    </div>

);

export default ModuleContactForm;