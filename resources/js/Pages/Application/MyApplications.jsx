import DashboardLayout from '@/Layouts/DashboardLayout';
import {Head, Link} from '@inertiajs/react';

export default function Index({ auth, applications }) {
    return (
        <DashboardLayout
            user={auth.user}
        >
            <Head title="My Job Applications" />

            <div className="py-12">
                <div
                    className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-8">
                    <div className="p-4 md:p-6 xl:p-7.5">
                        <div className="flex items-start justify-between">
                            <div>
                                <h2 className="text-title-sm2 font-bold text-black">Latest Job Applications</h2>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-stroke px-4 pb-5 md:px-6 xl:px-7.5">
                        <div className="flex items-center gap-3">
                            <div className="w-2/12 xl:w-3/12">
                                <span className="font-medium">Title</span>
                            </div>
                            <div className="w-2/12 xl:w-3/12">
                                <span className="font-medium">Type</span>
                            </div>
                            <div className="w-6/12 2xsm:w-5/12 md:w-3/12">
                                <span className="font-medium">location</span>
                            </div>
                            <div className="w-4/12 xl:w-3/12">
                                <span className="font-medium">Salary</span>
                            </div>
                            <div className="w-4/12 2xsm:w-3/12 md:w-2/12 xl:w-1/12">
                                <span className="font-medium">Application Status</span>
                            </div>
                            <div className="w-2/12 text-center md:w-1/12">
                                <span className="font-medium">Actions</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:p-6 xl:p-7.5">
                        <div className="flex flex-col gap-7">
                            {
                                applications.total !== 0 ? applications?.data.map((application, index) => (
                                    <div className="flex items-center gap-3" key={index}>
                                        <div className="w-2/12 xl:w-3/12">
                                            <div className="flex items-center gap-4">
                                                <span className="font-medium">
                                                    {
                                                        application?.job_post?.title
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        <div className="w-2/12 xl:w-3/12">
                                    <span className="font-medium">
                                        {
                                            application?.job_post?.type
                                        }
                                    </span>
                                        </div>
                                        <div className="w-6/12 2xsm:w-5/12 md:w-3/12">
                                            <span className="font-medium">
                                                {
                                                    application?.job_post?.location
                                                }
                                            </span>
                                        </div>
                                        <div className="w-4/12 xl:w-3/12">
                                            <span className="font-medium">
                                                {
                                                    application?.job_post?.salary
                                                }
                                            </span>
                                        </div>
                                        <div className="w-4/12 2xsm:w-3/12 md:w-2/12 xl:w-1/12">
                                            <span className={`inline-block rounded bg-red-50 py-0.5 px-2.5 text-sm font-medium text-red-500 ${application.status === 'pending' ? 'bg-red-50 text-red-500' : application.status === 'accepted' ? 'bg-green-50 text-green-500' : 'bg-yellow-50 text-yellow-500'}`}>
                                                {
                                                    application?.status
                                                }
                                            </span>
                                        </div>
                                        <div className="w-2/12 text-center md:w-1/12">

                                            <div className="flex items-center justify-center">
                                                <Link className="mx-auto flex items-center justify-between gap-2 text-sm font-medium text-white bg-primary hover:bg-opacity-90 py-2 px-4 rounded" href={route('application.destroy', application.id)}>
                                                    Cancel
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="flex items-center justify-center">
                                        <span className="font-medium">
                                            No applications found
                                        </span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
