import DashboardLayout from '@/Layouts/DashboardLayout';
import {Head, Link, useForm} from '@inertiajs/react';

export default function AvailableJobs({ auth, jobPosts }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        job_post_id: '',
    });

    const submit = (e) => {
        e.preventDefault();

        setData({
            ...data,
            job_post_id: e.target.job_post_id.value,
        });

        post(route('application.apply'));
    }
    return (
        <DashboardLayout
            user={auth.user}
        >
            <Head title="Recommended Jobs" />

            <div className="py-12">
                <div
                    className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-8">
                    <div className="p-4 md:p-6 xl:p-7.5">
                        <div className="flex items-start justify-between">
                            <div>
                                <h2 className="text-title-sm2 font-bold text-black">Available Job Positions</h2>
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
                            {
                                jobPosts.total !== 0 ? jobPosts?.data.map((jobPost, index) => (
                                    <div className="flex items-center gap-3" key={index}>
                                        <div className="w-2/12 xl:w-3/12">
                                            <div className="flex items-center gap-4">
                                                <span className="font-medium">
                                                    {
                                                        jobPost.title
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        <div className="w-2/12 xl:w-3/12">
                                    <span className="font-medium">
                                        {
                                            jobPost?.user.name
                                        }
                                    </span>
                                        </div>
                                        <div className="w-6/12 2xsm:w-5/12 md:w-3/12">
                                            <span className="font-medium">
                                                {
                                                    jobPost.location
                                                }
                                            </span>
                                        </div>
                                        <div className="w-4/12 xl:w-3/12">
                                            <span className="font-medium">
                                                {
                                                    jobPost.salary
                                                }
                                            </span>
                                        </div>
                                        <div className="w-4/12 2xsm:w-3/12 md:w-2/12 xl:w-1/12">
                                            <span className={`inline-block rounded bg-red-50 py-0.5 px-2.5 text-sm font-medium text-red-500 ${jobPost.is_approved ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'}`}>
                                                {
                                                    jobPost.is_approved ? 'Approved' : 'Pending'
                                                }
                                            </span>
                                        </div>
                                        <div className="w-2/12 text-center md:w-1/12">

                                            <form className="flex items-center justify-center" onSubmit={(submit)}>
                                                <input type="hidden" name="job_post_id" value={jobPost.id} />
                                                <button className="mx-auto flex items-center justify-between gap-2 text-sm font-medium text-white bg-primary hover:bg-opacity-90 py-2 px-4 rounded" type="submit">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" className="bi bi-send-check"
                                                         viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372l2.8-7Zm-2.54 1.183L5.93 9.363 1.591 6.602l11.833-4.733Z"/>
                                                        <path
                                                            d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
                                                    </svg>
                                                    Apply
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="flex items-center justify-center">
                                        <span className="font-medium">
                                            No job posts found
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
