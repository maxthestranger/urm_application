import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import AdminDashboard from "@/Components/AdminDashboard.jsx";
import AcademiaDashboard from "@/Components/AcademiaDashboard.jsx";
import CandidateDashboard from "@/Components/CandidateDashboard.jsx";
import RecruiterDashboard from "@/Components/RecruiterDashboard.jsx";
import DeiDashboard from "@/Components/DeiDashboard.jsx";

export default function Dashboard({ auth, jobs, jobCountAll, jobCountApproved, jobCountPending }) {
    const role = auth?.user?.role;
    return (
        <DashboardLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                {
                    role === 'admin' ? (
                        <AdminDashboard />
                    ) : role === 'academia' ? (
                        <AcademiaDashboard />
                    ) : role === 'candidate' ? (
                        <CandidateDashboard />
                    ) : role === 'recruiter' ? (
                        <RecruiterDashboard />
                    ) : (
                        <DeiDashboard jobs={jobs} jobCountAll={jobCountAll} jobCountApproved={jobCountApproved} jobCountPending={jobCountPending} />
                    )
                }
            </div>
        </DashboardLayout>
    );
}
