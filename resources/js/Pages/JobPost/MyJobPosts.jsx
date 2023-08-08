import DashboardLayout from '@/Layouts/DashboardLayout';
import { useState } from "react";
import {Head, Link, useForm} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import InputError from "@/Components/InputError.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";

export default function Index({ auth, jobPosts }) {
    const [showModal, setShowModal] = useState(false);
    const { data, setData, post, processing, errors, delete: destroy } = useForm({
        title: '',
        description: '',
        location: '',
        type: '',
        salary: '',
        benefits: '',
        requirements: '',
    });

    const submit = (e) => {
        e.preventDefault();

        setShowModal(false);

        post(route('job.store'));
    }

    const handleDelete = (id) => {
        destroy(route('job.destroy', id));
    }
    return (
        <DashboardLayout
            user={auth.user}
        >
            <Head title="Jobs" />

            <div className="py-12">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                    <PrimaryButton onClick={() => setShowModal(true)}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-plus-lg" viewBox="0 0 16 16">
                                      <path fillRule="evenodd"
                                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </span>
                        Create Job Post
                    </PrimaryButton>
                </div>
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

                                            <div className="flex items-center justify-center gap-2">
                                                <Link className="mx-auto block p-4 rounded-full hover:text-blue-500 hover:bg-gray" href={route('job.edit', jobPost.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                        <path fillRule="evenodd"
                                                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                    </svg>
                                                </Link>

                                                <button className="mx-auto block p-4 rounded-full hover:text-meta-1 hover:bg-gray" type="button" onClick={() => handleDelete(jobPost.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                        <path
                                                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                                    </svg>
                                                </button>
                                            </div>
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

            <div className={`fixed top-0 left-0 z-999999 h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${showModal ? 'flex' : 'hidden'}`}>
                <div className="w-full max-w-screen-md rounded-lg bg-white py-12 px-8 md:py-15 md:px-17.5 relative">
                    <button
                        onClick={() => setShowModal(false)}
                        className="absolute top-5 right-10 mt-5 mr-5 p-3 rounded-full hover:bg-gray transition-colors duration-200 focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path
                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </button>
                    <form onSubmit={submit} className="max-h-[calc(100vh-200px)] overflow-y-auto"> {/* Added these classes here */}
                        <div className="p-6.5">
                            <div className="mb-4.5">
                                <InputLabel htmlFor="title" value="Title" />
                                <TextInput id="title" placeholder="Type your title" type="text" name="title" value={data.title} onChange={(e) => setData('title', e.target.value)} />

                                <InputError message={errors.title} className="mt-2" />
                            </div>
                            <div className="mb-4.5">
                                <InputLabel htmlFor="description" value="Description" />
                                <textarea id="description" placeholder="Type your description" name="description" value={data.description} onChange={(e) => setData('description', e.target.value)} className="w-full h-40 border border-gray rounded p-3 focus:outline-none focus:border-primary transition-colors duration-200" />

                                <InputError message={errors.description} className="mt-2" />
                            </div>
                            <div className="mb-4.5">
                                <InputLabel htmlFor="location" value="Location" />
                                <TextInput id="location" placeholder="Where is the job located" type="text" name="location" value={data.location} onChange={(e) => setData('location', e.target.value)} />

                                <InputError message={errors.location} className="mt-2" />
                            </div>
                            <div className="mb-4.5">
                                <InputLabel htmlFor="salary" value="Salary" />
                                <TextInput id="salary" placeholder="What's the annual salary" type="text" name="salary" value={data.salary} onChange={(e) => setData('salary', e.target.value)} />

                                <InputError message={errors.salary} className="mt-2" />
                            </div>
                            <div className="mb-4.5">
                                <InputLabel htmlFor="type" value="Job Type" />
                                <select id="type" name="type" value={data.type} onChange={(e) => setData('type', e.target.value)} className="w-full border border-gray rounded p-3 focus:outline-none focus:border-primary transition-colors duration-200">
                                    <option value="">Select a job type</option>
                                    <option value="full-time">Full Time</option>
                                    <option value="part-time">Part Time</option>
                                    <option value="contract">Contract</option>
                                    <option value="internship">Internship</option>
                                    <option value="temporary">Temporary</option>
                                </select>

                                <InputError message={errors.type} className="mt-2" />
                            </div>
                            <div className="mb-4.5">
                                <InputLabel htmlFor="benefits" value="What are the benefits" />
                                <textarea id="benefits" placeholder="What are the benefits" name="benefits" value={data.benefits} onChange={(e) => setData('benefits', e.target.value)} className="w-full h-40 border border-gray rounded p-3 focus:outline-none focus:border-primary transition-colors duration-200" />

                                <InputError message={errors.benefits} className="mt-2" />
                            </div>
                            <div className="mb-4.5">
                                <InputLabel htmlFor="requirements" value="State the job requirements" />
                                <textarea id="requirements" placeholder="State the job requirements" name="requirements" value={data.requirements} onChange={(e) => setData('requirements', e.target.value)} className="w-full h-40 border border-gray rounded p-3 focus:outline-none focus:border-primary transition-colors duration-200" />

                                <InputError message={errors.requirements} className="mt-2" />
                            </div>
                            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 transition" type="submit">
                                Post Job
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </DashboardLayout>
    );
}
