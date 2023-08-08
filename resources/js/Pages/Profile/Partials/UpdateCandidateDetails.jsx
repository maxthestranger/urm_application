import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateCandidateDetails({candidate}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        phone: candidate?.phone || '',
        address: candidate?.address || '',
        bio: candidate?.bio || '',
        resume: candidate?.resume || '',
        position_preference: candidate?.position_preference || '',
        salary_expectation: candidate?.salary_expectation || '',
        availability: candidate?.availability || '',
        work_experience: candidate?.work_experience || '',
        skills: candidate?.skills || '',
        education: candidate?.education || '',
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('candidate.update', user.id));
    };

    return (
        <section className="max-w-xl">
            <header>
                <h2 className="text-lg font-medium text-gray-900">Candidate Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="phone" value="Phone" />

                    <TextInput
                        id="phone"
                        className="mt-1 block w-full"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        isFocused
                        autoComplete="phone"
                    />

                    <InputError className="mt-2" message={errors.phone} />
                </div>

                <div>
                    <InputLabel htmlFor="address" value="Address" />

                    <TextInput
                        id="address"
                        className="mt-1 block w-full"
                        value={data.address}
                        onChange={(e) => setData('address', e.target.value)}
                        autoComplete="address"
                    />

                    <InputError className="mt-2" message={errors.address} />
                </div>

                <div>
                    <InputLabel htmlFor="bio" value="Bio" />

                    <TextInput
                        id="bio"
                        className="mt-1 block w-full"
                        value={data.bio}
                        onChange={(e) => setData('bio', e.target.value)}
                        autoComplete="bio"
                    />

                    <InputError className="mt-2" message={errors.bio} />
                </div>

                <div>
                    <InputLabel htmlFor="resume" value="Resume" />

                    <input
                        id="resume"
                        className="mt-1 block w-full"
                        type="file"
                        value={data.resume}
                        onChange={(e) => setData('resume', e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.resume} />
                </div>

                <div>
                    <InputLabel htmlFor="position_preference" value="Position Preference" />

                    <TextInput
                        id="position_preference"
                        className="mt-1 block w-full"
                        value={data.position_preference}
                        onChange={(e) => setData('position_preference', e.target.value)}
                        autoComplete="position_preference"
                    />

                    <InputError className="mt-2" message={errors.position_preference} />
                </div>

                <div>
                    <InputLabel htmlFor="salary_expectation" value="Salary Expectation" />

                    <TextInput
                        id="salary_expectation"
                        className="mt-1 block w-full"
                        value={data.salary_expectation}
                        onChange={(e) => setData('salary_expectation', e.target.value)}
                        autoComplete="salary_expectation"
                    />

                    <InputError className="mt-2" message={errors.salary_expectation} />
                </div>

                <div>
                    <InputLabel htmlFor="availability" value="Availability" />

                    <select
                        id="availability"
                        className="mt-1 block w-full"
                        value={data.availability}
                        onChange={(e) => setData('availability', e.target.value)}
                        autoComplete="availability"
                    >
                        <option value="immediate">Immediate</option>
                        <option value="1 week">1 week</option>
                        <option value="2 weeks">2 weeks</option>
                        <option value="1 month">1 month</option>
                        <option value="2 months">2 months</option>
                        <option value="3 months">3 months</option>
                    </select>

                    <InputError className="mt-2" message={errors.availability} />
                </div>

                <div>
                    <InputLabel htmlFor="work_experience" value="Work Experience" />

                    <TextInput
                        id="work_experience"
                        className="mt-1 block w-full"
                        value={data.work_experience}
                        onChange={(e) => setData('work_experience', e.target.value)}
                        autoComplete="work_experience"
                    />

                    <InputError className="mt-2" message={errors.work_experience} />
                </div>

                <div>
                    <InputLabel htmlFor="skills" value="Skills" />

                    <TextInput
                        id="skills"
                        className="mt-1 block w-full"
                        value={data.skills}
                        onChange={(e) => setData('skills', e.target.value)}
                        autoComplete="skills"
                    />

                    <InputError className="mt-2" message={errors.skills} />
                </div>

                <div>
                    <InputLabel htmlFor="education" value="Education" />

                    <TextInput
                        id="education"
                        className="mt-1 block w-full"
                        value={data.education}
                        onChange={(e) => setData('education', e.target.value)}
                        autoComplete="education"
                    />

                    <InputError className="mt-2" message={errors.education} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
