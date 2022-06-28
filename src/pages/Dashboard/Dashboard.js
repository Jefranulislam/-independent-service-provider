import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    return (
        <div class="bg-white shadow rounded-lg p-10">
            <div class="flex flex-col gap-1 text-center items-center">
                <img class="h-32 w-32 bg-white p-2 rounded-full shadow mb-4" src={user.photoURL} alt="" />
                <p class="font-semibold">{user.email}</p>
                <div class="text-sm leading-normal text-gray-400 flex justify-center items-center">
                    <svg viewBox="0 0 24 24" class="mr-1" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Los Angeles, California <br />
                    Email verified?: {user.emailVerified}
                </div>
            </div>
            <div class="flex justify-center items-center gap-2 my-3">
                <div class="font-semibold text-center mx-4">
                    <p class="text-black">{user.uid}</p>
                    <span class="text-gray-400">Unique Code</span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;