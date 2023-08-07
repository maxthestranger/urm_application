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
                        <h1 className="text-xs text-gray sm:text-sm md:text-base">About Us</h1>
                        <h2 className="text-graydark text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl mt-5 px-4 sm:px-8 lg:px-24">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                    </div>
                </section>

                <section className="bg-gray-100 py-20">
                    <div className="container mx-auto flex flex-wrap">
                        <div className="w-full lg:w-1/2 px-6 lg:pl-12 py-8">
                            <h2 className="text-3xl font-bold mb-4">WHO WE ARE</h2>
                            <p className="mb-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src="/storage/images/about.jpg" alt="About Us" className="rounded-lg shadow-lg" />
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full md:w-1/3 px-4 mb-8">
                                <img src="/storage/images/avatar.png" alt="Testimonial 1"
                                     className="w-16 h-16 rounded-full mx-auto mb-4" />
                                <p>"This platform has revolutionized our recruitment process. Finding the right
                                    candidates has never been easier."</p>
                                <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
                            </div>
                            <div className="w-full md:w-1/3 px-4 mb-8">
                                <img src="/storage/images/avatar.png" alt="Testimonial 2"
                                     className="w-16 h-16 rounded-full mx-auto mb-4" />
                                <p>"I found my dream job through this platform. The support and opportunities
                                    available are unmatched."</p>
                                <h3 className="text-xl font-semibold mt-4">John Doe</h3>
                            </div>
                            <div className="w-full md:w-1/3 px-4 mb-8">
                                <img src="/storage/images/avatar.png" alt="Testimonial 3"
                                     className="w-16 h-16 rounded-full mx-auto mb-4" />
                                <p>"The focus on diversity and inclusion sets this platform apart. It's a great
                                    place for all academics."</p>
                                <h3 className="text-xl font-semibold mt-4">Sarah Johnson</h3>
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
