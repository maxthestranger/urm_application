import { Head } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout.jsx";

export default function Index({auth, feedbacks}) {

    return (
        <DashboardLayout
            user={auth.user}
        >
            <Head title="Feebacks & Reviews" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg border border-stroke px-5 pt-6 pb-2.5 sm:px-7.5 xl:pb-1">
                        <h4 className="mb-6 text-xl font-semibold text-black">
                            Feedbacks & Reviews
                        </h4>
                        <div className="max-w-full overflow-x-auto">
                            <table className="w-full table-auto">
                                <thead>
                                <tr className="bg-gray-2 text-left">
                                    <th className="min-w-[220px] py-4 px-4 font-medium text-black xl:pl-11">User</th>
                                    <th className="min-w-[220px] py-4 px-4 font-medium text-black">Feedback</th>
                                    <th className="min-w-[150px] py-4 px-4 font-medium text-black">Created at</th>
                                    <th className="min-w-[150px] py-4 px-4 font-medium text-black">Rating</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    feedbacks.total !== 0 ? feedbacks.data.map((feedback, index) => (
                                        <tr key={index}>
                                            <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                                <div className="flex flex-row items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                                        <span className="w-10 h-10 font-bold rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-medium">
                                                            {
                                                                feedback?.user?.name?.split(' ').map((n) => n[0]).join('')
                                                            }
                                                        </span>
                                                    </div>
                                                    <h5 className="font-medium text-black">{feedback?.user?.name}</h5>
                                                </div>
                                            </td>
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
        </DashboardLayout>
    )
}
