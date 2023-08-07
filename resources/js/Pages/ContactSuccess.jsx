import {Head, Link} from "@inertiajs/react";
import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";

export default function ContactSuccess({auth, message}) {
    return (
        <>

            <Head title="Contact Us" />
            <Header auth={auth} />

            <main>
                <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-400 mx-auto mb-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <h1 className="text-2xl font-semibold text-gray-700 mb-4">
                            {message}
                        </h1>
                        <p className="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you as soon as possible.</p>
                        <Link href={route('home')} className="text-blue-500 hover:underline">Go back to home page</Link>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
