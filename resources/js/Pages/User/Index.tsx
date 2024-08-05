import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head } from '@inertiajs/react';
import {PageProps, User} from '@/types';

export default function Edit({ auth,users }: PageProps<{ users: User[] }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">

                    {users.map((user)=> (
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            {user.name}
                        </div>
                    ))}

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
