import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApiUrl } from '../../Api/ApiUrl';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name.trim()) {
            toast.error('Name is required');
            return;
        }
        if (!formData.email.trim()) {
            toast.error('Email is required');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            toast.error('Invalid email address');
            return;
        }
        if (!formData.mobile.trim()) {
            toast.error('Mobile number is required');
            return;
        }
        if (!/^\d{10}$/.test(formData.mobile)) {
            toast.error('Mobile number must be 10 digits');
            return;
        }
        if (!formData.message.trim()) {
            toast.error('Message is required');
            return;
        }
        try {
            const response = await fetch(`${ApiUrl}/store/contactform`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                toast.success('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    message: ''
                });
            } else {
                toast.error('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An unexpected error occurred. Please try again later.');
        }
    };


    return (
        <>
            <section className="gap contact-us mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="content">
                                <h4>Our Contact Details</h4>
                                <h6 className="mt-3">7 Middleton Row Kolkata 700071 India</h6>
                                <p className="mt-3">
                                    Phone : <b> 033 - 4006 1156</b><br />
                                    Fax : <b>(91-33) 2249 7767</b><br />
                                    Email : <b><a href="mailto:provsecsa@loreto.in">provsecsa@loreto.in</a></b><br />
                                    Website : <b><a href="https://loreto.in/" target="_blank" rel="noreferrer">www.loreto.in</a></b>
                                </p>
                                <h6 className="mt-3 font-weight-bold">* If you would like to know more about us, please contact</h6>
                                <p>The Vocational Director : <a href="mailto:ibvmsavocations@gmail.com">ibvmsavocations@gmail.com</a></p>

                                <div className="map">
                                    <iframe
                                        className="w-100"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7730007234613!2d88.34968917593255!3d22.550174633790775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771079019917%3A0x936dfcbc761465b5!2s7%2C%20Sir%20William%20Jones%20Sarani%2C%20Park%20Street%20area%2C%20Kolkata%2C%20West%20Bengal%20700071!5e0!3m2!1sen!2sin!4v1710998858380!5m2!1sen!2sin"
                                        width={600}
                                        height={270}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        title='loreto'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoFocus
                                />
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email Id"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <input
                                    type="tel"
                                    name="mobile"
                                    placeholder="Mobile Number"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                />
                                <textarea
                                    placeholder="Your Message"
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                <button
                                    type="submit"
                                    className="theme-btn btn-primary"
                                >
                                    Send Message
                                </button>
                            </form>
                            <ToastContainer />
                        </div>
                        <div className="col-lg-12 text-justify">
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactUs;
