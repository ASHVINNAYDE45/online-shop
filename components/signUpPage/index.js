import React  from 'react'
import { useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import axios from 'axios';
import { useRouter } from 'next/router';

function SignUpPage() {
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
        <section className="">
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
                                <div className="card-body py-5 px-md-5">
                                    <form>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1" className="form-control" placeholder='First Name' />
                                                    {/* <label className="form-label" htmlFor="form3Example1">First name</label> */}
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example2" className="form-control" placeholder='Last Name' />
                                                    {/* <label className="form-label" htmlFor="form3Example2">Last name</label> */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example3" className="form-control" placeholder='Email Address' />
                                            {/* <label className="form-label" htmlFor="form3Example3">Email address</label> */}
                                        </div>


                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4" className="form-control" placeholder='Password' />
                                            {/* <label className="form-label" htmlFor="form3Example4">Password</label> */}
                                        </div>


                                        {/* <div className="form-check d-flex justify-content-center mb-4">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                                            <label className="form-check-label" htmlFor="form2Example33">
                                                Subscribe to our newsletter
                                            </label>
                                        </div> */}
                                        <div className="col-12 my-2">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="agreeToTerms"
                                                name="agreeToTerms"
                                                //checked={formData.agreeToTerms}
                                                //onChange={handleInputChange}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor="agreeToTerms">
                                                I agree to the terms and conditions
                                            </label>
                                        </div>


                                        <button type="submit" className="btn btn-primary btn-block mb-4">
                                            Sign up
                                        </button>


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
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SignUpPage;