import React from 'react'

function FooterPage() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="full">
                            <div className="logo_footer">
                                <img width="210" src="/assects/images/front.jpg" alt="#" />
                            </div>
                            <div className="information_f">
                                <p><strong>ADDRESS:</strong> 28 White tower, Street Name New York City, USA</p>
                                <p><strong>TELEPHONE:</strong> +91 987 654 3210</p>
                                <p><strong>EMAIL:</strong> yourmain@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="widget_menu">
                                            <h3>Menu</h3>
                                            <ul>
                                                <li>Home</li>
                                                <li>About</li>
                                                <li>Services</li>
                                                <li>Testimonial</li>
                                                <li>Blog</li>
                                                <li>Contact</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="widget_menu">
                                            <h3>Account</h3>
                                            <ul>
                                                <li>Account</li>
                                                <li>Checkout</li>
                                                <li>Login</li>
                                                <li>Register</li>
                                                <li>Shopping</li>
                                                <li>Widget</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="widget_menu">
                                    <h3>Newsletter</h3>
                                    <div className="information_f">
                                        <p>Subscribe by our newsletter and get update protidin.</p>
                                    </div>
                                    <div className="form_sub">
                                        <form>
                                            <fieldset>
                                                <div className="field">
                                                    <input type="email" placeholder="Enter Your Mail" name="email" />
                                                    <input type="submit" value="Subscribe" />
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default FooterPage
