import { useEffect } from 'react';
import { Head, useForm } from "@inertiajs/react";
import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";

export default function Contact({ auth }) {
    const { data, setData, post, processing, errors} = useForm({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('contact'))
    };

    return (
        <>
            <Head title="Contact Us" />
            <Header auth={auth} />

            <main>
                <section className="bg-primary py-20">
                    <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h1 className="text-xs text-gray sm:text-sm md:text-base">Contact Us</h1>
                        <h2 className="text-graydark text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl mt-5 px-4 sm:px-8 lg:px-24">
                            Have a question or need help with something? Fill out the form below, and we'll get back to you!
                        </h2>
                    </div>
                </section>

                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h1 className="text-4xl font-bold text-gray-700 mb-2">Get in Touch</h1>
                            <p className="text-gray-500 text-lg mb-1">
                                We are here to answer any questions you may have about our platform. Reach out to us and we'll respond as soon as we can.
                            </p>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-700 mb-2">Contact Info</h2>
                                <p className="text-gray-500 text-sm mb-1">Email: <a href="mailto:info@urm-app.com" className="underline">info@urm-app.com</a></p>
                                <p className="text-gray-500 text-sm mb-1">Phone: <a href="tel:+1-803-000-0000" className="underline">+234-803-000-0000</a></p>
                            </div>
                        </div>
                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">Full Name</label>
                                <input type="text" name="fullName" value={data.fullName} onChange={(e) => setData('fullName', e.target.value)} required className="w-full px-3 py-2 mt-2 text-gray-900 border border-gray-300 rounded-md focus:ring focus:ring-opacity-50" />
                                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                                <input type="email" name="email" value={data.email} onChange={(e) => setData('email', e.target.value)} required className="w-full px-3 py-2 mt-2 text-gray-900 border border-gray-300 rounded-md focus:ring focus:ring-opacity-50" />
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone</label>
                                <input type="tel" name="phone" value={data.phone} onChange={(e) => setData('phone', e.target.value)} className="w-full px-3 py-2 mt-2 text-gray-900 border border-gray-300 rounded-md focus:ring focus:ring-opacity-50" />
                                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-600">Subject</label>
                                <input type="text" name="subject" value={data.subject} onChange={(e) => setData('subject', e.target.value)} required className="w-full px-3 py-2 mt-2 text-gray-900 border border-gray-300 rounded-md focus:ring focus:ring-opacity-50" />
                                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
                                <textarea name="message" value={data.message} onChange={(e) => setData('message', e.target.value)} required className="w-full px-3 py-2 mt-2 text-gray-900 border border-gray-300 rounded-md focus:ring focus:ring-opacity-50" rows="5"></textarea>
                                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white p-3 rounded-md hover:bg-primary-dark transition duration-300" disabled={processing}>Send Message</button>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
