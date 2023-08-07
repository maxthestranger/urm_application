import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

export default function Index({ auth }) {
    return (
        <DashboardLayout
            user={auth.user}
        >
            <Head title="Jobs" />

            <div className="py-12">
                <div
                    className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-8">
                    <div className="p-4 md:p-6 xl:p-7.5">
                        <div className="flex items-start justify-between">
                            <div>
                                <h2 className="text-title-sm2 font-bold text-black">Recent Job Posts</h2>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-stroke px-4 pb-5 md:px-6 xl:px-7.5">
                        <div className="flex items-center gap-3">
                            <div className="w-2/12 xl:w-3/12">
                                <span className="font-medium">Title</span>
                            </div>
                            <div className="w-2/12 xl:w-3/12">
                                <span className="font-medium">Recruiter/Academia</span>
                            </div>
                            <div className="w-6/12 2xsm:w-5/12 md:w-3/12">
                                <span className="font-medium">location</span>
                            </div>
                            <div className="w-4/12 xl:w-3/12">
                                <span className="font-medium">Salary</span>
                            </div>
                            <div className="w-4/12 2xsm:w-3/12 md:w-2/12 xl:w-1/12">
                                <span className="font-medium">Status</span>
                            </div>
                            <div className="w-2/12 text-center md:w-1/12">
                                <span className="font-medium">Actions</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:p-6 xl:p-7.5">
                        <div className="flex flex-col gap-7">
                            <div className="flex items-center gap-3">
                                <div className="w-2/12 xl:w-3/12">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary font-bold flex items-center justify-center text-white">
                                            CD
                                        </div>
                                        <span className="hidden font-medium xl:block">Ruby on Rails Developer</span>
                                    </div>
                                </div>
                                <div className="w-2/12 xl:w-3/12">
                                    <span className="font-medium">
                                        Unison International Consulting Pvt. Ltd.
                                    </span>
                                </div>
                                <div className="w-6/12 2xsm:w-5/12 md:w-3/12">
                                    <span className="font-medium">WorldWide</span>
                                </div>
                                <div className="w-4/12 xl:w-3/12">
                                    <span className="font-medium">$114, 000/Yr</span>
                                </div>
                                <div className="w-4/12 2xsm:w-3/12 md:w-2/12 xl:w-1/12">
                                    <span className="inline-block rounded bg-red-50 py-0.5 px-2.5 text-sm font-medium text-red-500">
                                        Closed
                                    </span>
                                </div>
                                <div className="w-2/12 text-center md:w-1/12">

                                    <div className="flex items-center justify-center gap-2">
                                        <button className="mx-auto block p-4 rounded-full hover:text-blue-500 hover:bg-gray">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path
                                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fillRule="evenodd"
                                                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                            </svg>
                                        </button>

                                        <button className="mx-auto block p-4 rounded-full hover:text-meta-1 hover:bg-gray">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path
                                                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
