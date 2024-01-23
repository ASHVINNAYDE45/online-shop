import React from 'react';
import { FaMapMarker, FaPhone, FaEnvelope, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Styles from './styles.module.css'; // Corrected import statement

function FooterPage() {
    return (
        <footer className={Styles.styles}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-col">
                        <div className="footer_contact">
                            <h4>Reach at..</h4>
                            <div className={Styles.contact_link_box}>
                                <a href="">
                                    <i className="fa fa-map-marker" aria-hidden="true" />
                                    <span>Location</span>
                                </a>
                                <p>
                                    <a href="">
                                        <i className="fa fa-phone" aria-hidden="true" />
                                        <span>Call +01 1234567890</span>
                                    </a>
                                </p>
                                <p>
                                    <a href="">
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        <span>demo@gmail.com</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 footer-col">
                        <div className={Styles.footer_detail}>
                            <a href="index.html" className={Styles.footer_logo}>
                                Famms
                            </a>
                            <p>
                                Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
                            </p>
                            <div className={Styles.footer_social}>
                                <a href="">
                                    <i className="fa fa-facebook" aria-hidden="true" />
                                </a>
                                <a href="">
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </a>
                                <a href="">
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                </a>
                                <a href="">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>
                                <a href="">
                                    <i className="fa fa-pinterest" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 footer-col">
                        <div className={Styles.map_container}>
                            <div className={Styles.map}>
                                <div id="googleMap" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.footer_info}>
                    <div className="col-lg-7 mx-auto px-0">
                        <p>
                            © <span id="displayYear" /> All Rights Reserved By
                            <a href="https://html.design/">Company</a>
                            <br />
                            Distributed By{' '}
                            <a href="https://themewagon.com/" target="_blank">
                                themewagon
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterPage;
