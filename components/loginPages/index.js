import React from 'react';
import styles from "./styles.module.css";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import { Button } from 'react-bootstrap';

const initialValues = {
    email: "",
    password: "",
};

const validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(20),
});

function LoginPages() {
    const handleFormSubmit = (values, { resetForm }) => {
        console.log("Form Values:", values);
        resetForm();
    };

    return (
        <section className={`h-100 ${styles['gradient-form']}`} style={{ backgroundColor: '#eee' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">
                                        <div className="text-center">
                                            <img src="https:mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                style={{ width: '185px' }} alt="logo" />
                                            <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                                        </div>
                                        <Formik
                                            validationSchema={validationSchema}
                                            onSubmit={handleFormSubmit}
                                            initialValues={initialValues}
                                        >
                                            {({ handleSubmit, isSubmitting }) => (
                                                <Form noValidate onSubmit={handleSubmit}>
                                                    <p>Please login to your account</p>
                                                    <div className="form-outline mb-4">
                                                        <Field type="email"
                                                            className="form-control"
                                                            name="email"
                                                            label="email"
                                                            placeholder="Phone number or email address" />
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <Field type="password"
                                                            name="password"
                                                            className="form-control"
                                                            label="password"
                                                            placeholder='Password' />
                                                    </div>
                                                    <div className="text-center pt-1 mb-5 pb-1">
                                                        <Button
                                                            disabled={isSubmitting}
                                                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                            type="submit">
                                                            Log in
                                                        </Button>
                                                        <a className="text-muted" href="signUp">Forgot password?</a>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-center pb-4">
                                                        <p className="mb-0 me-2">Dont have an account</p>
                                                        <button type="button" className="btn btn-outline-danger">Create new</button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-green px-3 py-4 p-md-5 mx-md-4" style={{ backgroundColor: '#fccb90' }}>
                                        <h4 className="mb-4">We are more than just a company</h4>
                                        <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginPages;
