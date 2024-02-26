import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/router';

function SignPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Check if the user has agreed to the terms
            if (!formData.agreeToTerms) {
                alert('Please agree to the terms before signing up');
                return;
            }

            // Make sure passwords match
            if (formData.password !== formData.confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            // Use axios to handle the registration (replace with your API endpoint)
            const response = await axios.post('https://reqres.in/api/register', {
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password,
            });

            router.replace('/login');
            console.log('Registration successful:', response.data);
        } catch (error) {
            console.error('Error during registration:', error.message);
            // Handle the error (display an error message, etc.)
        }
    };

    return (
        <section>
            <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: 'hsl(0, 0%, 96%)' }}>
                <div className="container">
                    <div className="row gx-lg-5 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="my-5 display-3 fw-bold ls-tight">
                                The best offer <br />
                                <span className="text-primary">for your shopping</span>
                            </h1>
                            <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                                quibusdam tempora at cupiditate quis eum maiores libero
                                veritatis? Dicta facilis sint aliquid ipsum atque?
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="card">
                                <div className="card-body py-5 px-md-5"></div>
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="card">
                            <div className="card-body py-5 px-md-5"> */}
                                <h1 className="text-center mb-5">Sign Up</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className=" mb-4">
                                        <div className="form-outline">  
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Full Name"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                        />
                                        </div>
                                    </div>
                                    <div className="  mb-4">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email Address"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Confirm Password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-check mb-4">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="agreeToTerms"
                                            name="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="agreeToTerms">
                                            I agree to the terms and conditions
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                        Sign Up
                                    </button>
                                </form>
                                <div className="text-center">
                                    <p>or sign up with</p>
                                    <button type="button" className="btn btn-link btn-floating mx-1">

                                        <FaFacebook />
                                    </button>
                                    <button type="button" className="btn btn-link btn-floating mx-1">

                                        <FaGoogle />
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">

                                        <FaTwitter />
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">

                                        <FaGithub />
                                    </button>
                                    {/* <FaFacebook className="btn btn-link btn-floating mx-1" />
                                    <FaGoogle className="btn btn-link btn-floating mx-1" />
                                    <FaTwitter className="btn btn-link btn-floating mx-1" />
                                    <FaGithub className="btn btn-link btn-floating mx-1" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default SignPage;
