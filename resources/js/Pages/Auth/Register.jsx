import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        role: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div>
                <div className="border-b border-stroke py-4 px-6.5">
                    <h3 className="font-medium text-black text-center uppercase">
                        Create an account
                    </h3>
                </div>

                <form onSubmit={submit}>
                    <div className="p-6.5">
                        <div className="mb-4.5">
                            <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-4.5 sm:gap-6.5">
                                <label htmlFor="academia" className="flex cursor-pointer select-none items-center">
                                    <div className="relative">
                                        <input type="radio" className="sr-only" name="role" id="academia" value="academia" onChange={(e) => setData('role', e.target.value)} />
                                        <div className={`mr-2 flex h-5 w-5 items-center justify-center rounded border ${data.role === 'academia' && 'border-primary bg-gray'}`}>
                                            <span className={`h-2.5 w-2.5 rounded-sm ${data.role === 'academia' && 'bg-primary'}`} />
                                        </div>
                                    </div>
                                    Academia
                                </label>

                                <label htmlFor="candidate" className="flex cursor-pointer select-none items-center">
                                    <div className="relative">
                                        <input type="radio" className="sr-only" name="role" id="candidate" value="candidate" onChange={(e) => setData('role', e.target.value)} />
                                        <div className={`mr-2 flex h-5 w-5 items-center justify-center rounded border ${data.role === 'candidate' && 'border-primary bg-gray'}`}>
                                            <span className={`h-2.5 w-2.5 rounded-sm ${data.role === 'candidate' && 'bg-primary'}`} />
                                        </div>
                                    </div>
                                    Candidate
                                </label>

                                <label htmlFor="recruiter" className="flex cursor-pointer select-none items-center">
                                    <div className="relative">
                                        <input type="radio" className="sr-only" name="role" id="recruiter" value="recruiter" onChange={(e) => setData('role', e.target.value)} />
                                        <div className={`mr-2 flex h-5 w-5 items-center justify-center rounded border ${data.role === 'recruiter' && 'border-primary bg-gray'}`}>
                                            <span className={`h-2.5 w-2.5 rounded-sm ${data.role === 'recruiter' && 'bg-primary'}`} />
                                        </div>
                                    </div>
                                    Recruiter
                                </label>

                                <label htmlFor="dei" className="flex cursor-pointer select-none items-center">
                                    <div className="relative">
                                        <input type="radio" className="sr-only" name="role" id="dei" value="dei" onChange={(e) => setData('role', e.target.value)} />
                                        <div className={`mr-2 flex h-5 w-5 items-center justify-center rounded border ${data.role === 'dei' && 'border-primary bg-gray'}`}>
                                            <span className={`h-2.5 w-2.5 rounded-sm ${data.role === 'dei' && 'bg-primary'}`} />
                                        </div>
                                    </div>
                                    DEI Officer
                                </label>
                            </div>
                                <InputError message={errors.role} className="mt-2" />
                        </div>

                        <div className="mb-4.5">
                            <InputLabel htmlFor="name" value="Full Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mb-4.5">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mb-4.5">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mb-4.5">
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />

                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        <div className="mb-4.5">
                            <PrimaryButton className="w-full" disabled={processing}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-person-add" viewBox="0 0 16 16">
                                      <path
                                          d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                                      <path
                                          d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                                    </svg>
                                </span>
                                Create Account
                            </PrimaryButton>
                        </div>

                        <div>
                            <Link
                                href={route('login')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Already registered?
                            </Link>
                        </div>
                    </div>
                </form>
            </div>

        </GuestLayout>
    );
}
