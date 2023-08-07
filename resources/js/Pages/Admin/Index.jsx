import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

export default function Index({ auth }) {
    return (
        <DashboardLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>

                <div
                    className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
                        <div
                            className="flex items-center justify-center gap-2 border-b border-stroke pb-5 dark:border-strokedark xl:border-b-0 xl:border-r xl:pb-0">
                            <div><h4
                                className="mb-0.5 text-xl font-semibold text-black dark:text-white md:text-title-lg">$4,350</h4>
                                <p className="text-sm font-medium">Unique Visitors</p></div>
                        </div>
                        <div
                            className="flex items-center justify-center gap-2 border-b border-stroke pb-5 dark:border-strokedark xl:border-b-0 xl:border-r xl:pb-0">
                            <div><h4
                                className="mb-0.5 text-xl font-semibold text-black dark:text-white md:text-title-lg">55.9K</h4>
                                <p className="text-sm font-medium">Total Pageviews</p></div>
                        </div>
                        <div
                            className="flex items-center justify-center gap-2 border-b border-stroke pb-5 dark:border-strokedark sm:border-b-0 sm:pb-0 xl:border-r">
                            <div><h4
                                className="mb-0.5 text-xl font-semibold text-black dark:text-white md:text-title-lg">54%</h4>
                                <p className="text-sm font-medium">Bounce Rate</p></div>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <div><h4
                                className="mb-0.5 text-xl font-semibold text-black dark:text-white md:text-title-lg">2m
                                56s</h4><p className="text-sm font-medium">Visit Duration</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
