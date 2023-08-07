import {useState} from "react";
import {Head, useForm} from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import InputError from "@/Components/InputError.jsx";

export default function MyFeedbacks({auth, feedbacks}) {
    console.log(feedbacks);
    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(1);
    const { data, setData, post, processing, errors, reset } = useForm({
        content: '',
        rating: rating,
    });


    const handleStarClick = (starValue) => {
        setRating(starValue);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('feedback.store'));
    }

    return (
        <DashboardLayout
            user={auth.user}
        >
            <Head title="Feebacks & Reviews" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                        <PrimaryButton onClick={() => setShowModal(true)}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-plus-lg" viewBox="0 0 16 16">
                                      <path fillRule="evenodd"
                                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </span>
                            Give Feedback
                        </PrimaryButton>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg border border-stroke px-5 pt-6 pb-2.5 sm:px-7.5 xl:pb-1">
                        <h4 className="mb-6 text-xl font-semibold text-black">
                            Your Feedbacks & Reviews
                        </h4>
                        <div className="max-w-full overflow-x-auto">
                            <table className="w-full table-auto">
                                <thead>
                                <tr className="bg-gray-2 text-left">
                                    <th className="min-w-[220px] py-4 px-4 font-medium text-black xl:pl-11">Content</th>
                                    <th className="min-w-[150px] py-4 px-4 font-medium text-black">Created at</th>
                                    <th className="min-w-[150px] py-4 px-4 font-medium text-black">Rating</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    feedbacks.total !== 0 ? feedbacks.data.map((feedback, index) => (
                                        <tr key={index}>
                                            <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                                <h5 className="font-medium text-black">{feedback?.content}</h5>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <h5 className="font-medium text-sm text-black">{
                                                    new Date(feedback?.created_at).toLocaleDateString('en-GB', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric',
                                                    })
                                                }</h5>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <div className="flex flex-row items-center justify-between">
                                                    {[1, 2, 3, 4, 5].map((starValue) => (
                                                        <span
                                                            key={starValue}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                 className="bi bi-star" viewBox="0 0 16 16" fill={starValue <= feedback?.rating ? '#3C50E0' : 'currentColor'}>
                                                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                            </svg>
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td className="py-5 px-4 pl-9 dark:border-strokedark xl:pl-11 text-center" colSpan="2">
                                                <h5 className="font-medium text-black">No feedbacks Yet</h5>
                                            </td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`fixed top-0 left-0 z-999999 h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${showModal ? 'flex' : 'hidden'}`}>
                <div className="w-full max-w-142.5 rounded-lg bg-white py-12 px-8 md:py-15 md:px-17.5 relative">
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
                    <form onSubmit={submit}>
                        <div className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black">Rating</label>
                                <div className="flex flex-row items-center justify-between">
                                    {/* rating star */}
                                    {[1, 2, 3, 4, 5].map((starValue) => (
                                        <span
                                            key={starValue}
                                            onClick={() => handleStarClick(starValue)}
                                            className="cursor-pointer mx-1"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 className="bi bi-star" viewBox="0 0 16 16" fill={starValue <= rating ? '#3C50E0' : 'currentColor'}>
                                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                        </span>
                                    ))}
                                </div>

                                <InputError message={errors.rating} className="mt-2" />
                            </div>
                            <div className="mb-6">
                                <label className="mb-2.5 block text-black">Message</label>
                                <textarea rows="6" placeholder="Type your message"
                                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                                            value={data.content}
                                          onChange={(e) => setData('content', e.target.value)} />

                                <InputError message={errors.content} className="mt-2" />
                            </div>
                            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 transition" type="submit">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    )
}
