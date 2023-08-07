import {Link} from "@inertiajs/react";

export default function DeiDashboard({jobs, jobCountAll, jobCountApproved, jobCountPending}) {
    return (
        <>
            <div
                className="col-span-12 bg-white overflow-hidden shadow-sm sm:rounded-lg p-7.5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
                    <div
                        className="flex items-center justify-center gap-2 border-b border-stroke pb-5 xl:border-b-0 xl:border-r xl:pb-0">
                        <div><h4
                            className="mb-0.5 text-xl font-semibold text-black md:text-title-lg">
                            {jobCountAll}
                        </h4>
                            <p className="text-sm font-medium">All Jobs</p></div>
                    </div>
                    <div
                        className="flex items-center justify-center gap-2 border-b border-stroke pb-5 xl:border-b-0 xl:border-r xl:pb-0">
                        <div><h4
                            className="mb-0.5 text-xl font-semibold text-black md:text-title-lg">
                            {jobCountPending}
                        </h4>
                            <p className="text-sm font-medium">Pending Jobs</p></div>
                    </div>
                    <div
                        className="flex items-center justify-center gap-2 border-b border-stroke pb-5 sm:border-b-0 sm:pb-0 xl:border-r">
                        <div><h4
                            className="mb-0.5 text-xl font-semibold text-black md:text-title-lg">
                            {jobCountApproved}
                        </h4>
                            <p className="text-sm font-medium">Approved Jobs</p></div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div><h4
                            className="mb-0.5 text-xl font-semibold text-black md:text-title-lg">
                            N/A
                        </h4><p className="text-sm font-medium">Rejected Jobs</p></div>
                    </div>
                </div>
            </div>

            <div
                className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-8">
                <div className="p-4 md:p-6 xl:p-7.5">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-title-sm2 font-bold text-black">Recent Job Listing</h2>
                        </div>
                    </div>
                </div>
                <div className="border-b border-stroke px-4 pt-5 pb-5 md:px-6 xl:px-7.5 bg-indigo-50 font-bold">
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
                        {
                            jobs.map((job, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-2/12 xl:w-3/12">
                                        <span className="hidden font-medium xl:block">{job.title}</span>
                                    </div>
                                    <div className="w-2/12 xl:w-3/12">
                                        <span className="font-medium capitalize">
                                            {job?.user?.name} - {job?.user?.role}
                                        </span>
                                    </div>
                                    <div className="w-6/12 2xsm:w-5/12 md:w-3/12">
                                        <span className="font-medium">{job.location}</span>
                                    </div>
                                    <div className="w-4/12 xl:w-3/12">
                                        <span className="font-medium">{job.salary}</span>
                                    </div>
                                    <div className="w-4/12 2xsm:w-3/12 md:w-2/12 xl:w-1/12">
                                        <span className="inline-block rounded bg-orange-50 py-0.5 px-2.5 text-sm font-medium text-orange-500">
                                            Pending
                                        </span>
                                    </div>
                                    <div className="w-2/12 text-center md:w-1/12">
                                        <Link className="mx-auto flex items-center gap-3 p-4 rounded hover:text-blue-500 hover:bg-gray" href={route('job.show', job)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                                <path
                                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                            </svg>
                                            View
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
