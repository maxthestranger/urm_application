import DashboardLayout from '@/Layouts/DashboardLayout';
import {Head, Link} from '@inertiajs/react';

export default function Show({ auth, jobPost }) {
    return (
        <DashboardLayout
            user={auth.user}
        >
            <Head title="Job Post" />

            <div className="py-12">
                <div
                    className="mt-8">
                    <div className="grid grid-cols-5 gap-8">
                        <div className="col-span-5 xl:col-span-3">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="border-b border-stroke py-4 px-7">
                                    <h3 className="font-medium text-black">
                                        Job Details
                                    </h3>
                                </div>
                                <div className="p-7">
                                    <h3 className="font-bold text-center text-black my-4">
                                        {
                                            jobPost.title
                                        }
                                    </h3>

                                    <div className="flex justify-between">
                                        <div>
                                            <p className="text-graydark mb-2 font-medium mt-6">
                                                Job Type
                                            </p>
                                            <p className="text-black">
                                                {
                                                    jobPost.type
                                                }
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-graydark mb-2 font-medium mt-6">
                                                Salary
                                            </p>
                                            <p className="text-black">
                                                {
                                                    jobPost.salary
                                                }
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-graydark mb-2 font-medium mt-6">
                                        Description
                                    </p>

                                    <p className="text-black">
                                        {
                                            jobPost.description
                                        }
                                    </p>

                                    <p className="text-graydark mb-2 font-medium mt-6">
                                        Requirements
                                    </p>

                                    <p className="text-black">
                                        {
                                            jobPost.requirements
                                        }
                                    </p>

                                    <p className="text-graydark mb-2 font-medium mt-6">
                                        Benefits
                                    </p>
                                    <p className="text-black">
                                        {
                                            jobPost.benefits
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-5 xl:col-span-2">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="border-b border-stroke py-4 px-7">
                                    <h3 className="font-medium text-black">
                                        Recruiter Details
                                    </h3>
                                </div>

                                <div className="p-7">
                                    {
                                        jobPost.user && (
                                            <>
                                                <div className="flex justify-between">
                                                    <div>
                                                        <p className="text-graydark mb-2 font-medium mt-6">
                                                            Name
                                                        </p>
                                                        <p className="text-black">
                                                            {
                                                                jobPost.user.name
                                                            }
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <p className="text-graydark mb-2 font-medium mt-6">
                                                            Email
                                                        </p>
                                                        <p className="text-black">
                                                            {
                                                                jobPost.user.email
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Link
                            href={route('dashboard')}
                            className="text-white bg-primary py-2 px-4 rounded hover:bg-blue-500 transition duration-300"
                        >
                            Back to Job Posts
                        </Link>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
