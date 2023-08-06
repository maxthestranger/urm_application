import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="mx-auto max-w-screen-sm xl:w-1/2 p-4 md:p-6 2xl:p-10">
                <div className="rounded-sm border border-stroke bg-white shadow-default">
                    {children}
                </div>
            </div>
        </div>
    );
}
