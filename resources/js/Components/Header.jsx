import { useState } from "react";
import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown.jsx";

export default function Header({auth}) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <header className="bg-primary text-black sticky top-0 z-50 w-full">
            <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold block px-3 py-2 text-white border-4 border-white sm:text-2xl">
                        URM APPLICATION
                    </Link>
                </div>

                <nav className="hidden sm:flex items-center">
                    <Link href="/" className="block p-4 text-white font-bold hover:text-gray-800">Home</Link>
                    <Link href={route('about')} className="block p-4 text-white font-bold hover:text-gray-800">About</Link>
                    <Link href={route('services')} className="block p-4 text-white font-bold hover:text-gray-800">Services</Link>
                    <a href="https://vxp9395.uta.cloud/blog/" className="block p-4 text-white font-bold hover:text-gray-800" target="_blank">Blog</a>
                    <Link href={route('contact')} className="block p-4 text-white font-bold hover:text-gray-800">Contact</Link>
                </nav>

                <div className="flex items-center sm:hidden">
                    <button
                        onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                        className="text-white"
                    >
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            {/* ... menu icon ... */}

                            <path
                                className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Dropdown */}
                <div className={`${showingNavigationDropdown ? 'block' : 'hidden'} sm:hidden`}>
                    <nav>
                        {/* ... mobile nav links ... */}
                        <Link href="/" className="block p-4 text-white font-bold hover:text-gray-800">Home</Link>
                        <Link href={route('about')} className="block p-4 text-white font-bold hover:text-gray-800">About</Link>
                        <Link href={route('services')} className="block p-4 text-white font-bold hover:text-gray-800">Services</Link>
                        <a href="https://vxp9395.uta.cloud/blog/" className="block p-4 text-white font-bold hover:text-gray-800" target="_blank">Blog</a>
                        <Link href={route('contact')} className="block p-4 text-white font-bold hover:text-gray-800">Contact</Link>
                    </nav>
                </div>

                <div className="flex items-center">
                    {
                        auth?.user?.name ? (
                            <>
                                <div className="hidden sm:flex sm:items-center sm:ml-6">
                                    <div className="ml-3 relative">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {auth.user?.name}

                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                                    Log Out
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>

                                <div className="-mr-2 flex items-center sm:hidden">
                                    <button
                                        onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                    >
                                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path
                                                className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                            <path
                                                className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </>
                        ) : (
                            <Link href={route('login')} className="block p-4 text-white font-bold hover:text-gray-800">Login/Register</Link>
                        )
                    }
                </div>
            </div>
        </header>
    )
}
