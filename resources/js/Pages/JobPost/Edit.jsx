import DashboardLayout from '@/Layouts/DashboardLayout';
import {Head, useForm} from '@inertiajs/react';
import InputError from "@/Components/InputError.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";

export default function Edit({ auth, jobPost }) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        title: jobPost.title,
        description: jobPost.description,
        location: jobPost.location,
        type: jobPost.type,
        salary: jobPost.salary,
        benefits: jobPost.benefits,
        requirements: jobPost.requirements,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('job.update', jobPost.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            }
        });
    }
    return (
        <DashboardLayout
            user={auth.user}
        >
            <Head title="Edit Job" />

            <div className="py-12">
                <div
                    className="bg-white shadow-sm sm:rounded-lg mt-8">
                    <div className="p-4 md:p-6 xl:p-7.5">
                        <form onSubmit={submit}>
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
                                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 transition" type="submit" disabled={processing}>
                                    Update Job
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </DashboardLayout>
    );
}
