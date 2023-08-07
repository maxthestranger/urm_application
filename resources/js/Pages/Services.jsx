import { Head } from '@inertiajs/react';
import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";

export default function About({ auth }) {
    return (
        <>
            <Head title="About Us" />
            <Header auth={auth} />

            <main>
                <section className="bg-primary py-20">
                    <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h1 className="text-xs text-gray sm:text-sm md:text-base">Services</h1>
                        <h2 className="text-graydark text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl mt-5 px-4 sm:px-8 lg:px-24">Explore our various services below to learn how we can assist you in achieving your goals.</h2>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto flex flex-wrap">
                        <div className="w-full px-6 py-8 text-center lg:w-1/2 mx-auto">
                            <h2 className="text-2xl font-bold mb-4">Introducing Our Services</h2>
                            <p>We offer a comprehensive platform for academic institutions, recruiters, DEI Officers, and
                                URM candidates. Our services are designed to facilitate seamless collaboration, job
                                matching, profile management, real-time notifications, and more.
                            </p>
                        </div>
                        <div className="w-full mt-4">
                            <img src="/storage/images/services.jpg" alt="About Us" className="rounded-lg shadow-l mx-auto" />
                        </div>
                    </div>
                </section>


                <section className="bg-gray-100 py-12">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl text-center mb-8">Recruiters</h2>
                        <div className="flex flex-wrap justify-around">
                            <div className="w-64 p-4">
                                <h3 className="text-xl font-bold mb-4">Profile Creation</h3>
                                <p>Create and manage profiles for recruiting agencies, clients, and positions you are
                                    recruiting for.</p>
                            </div>
                            <div className="w-64 p-4">
                                <h3 className="text-xl font-bold mb-4">Job Matching</h3>
                                <p>Find URM candidates that match your clients' preferences, track applications, and manage
                                    postings.</p>
                            </div>
                            <div className="w-64 p-4">
                                <h3 className="text-xl font-bold mb-4">Real-time Notifications</h3>
                                <p>Stay updated with alerts, matches, and interactions through our real-time notification
                                    system.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl text-center mb-8">Academic Institutions</h2>
                        <div className="flex flex-wrap justify-around">
                            <div className="w-64 p-4">
                                <h3 className="text-xl font-bold mb-4">Profile Management</h3>
                                <p>Create and manage your academic institution profile, including faculty and research focus
                                    areas.</p>
                            </div>
                            <div className="w-64 p-4">
                                <h3 className="text-xl font-bold mb-4">Job Postings</h3>
                                <p>Post and manage job vacancies, track applications, and find URM candidates that match
                                    your needs.</p>
                            </div>
                            <div className="w-64 p-4">
                                <h3 className="text-xl font-bold mb-4">Chat & Collaboration</h3>
                                <p>Communicate with URM candidates and recruiters through our integrated chat system.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-accent-dark text-white py-20">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl font-bold">Join Our Academic Network Today!</h1>
                        <p className="text-xl mt-4 mb-8">Find opportunities, connect with peers, and grow your
                            academic career.</p>
                        <a href={route('register')} className="bg-white text-accent-dark px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 ease-in-out">Get
                            Started</a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
