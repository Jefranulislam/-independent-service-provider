import React from 'react';
import Google from '../../images/social icons/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div class="relative flex py-5 items-center">
                <div class="flex-grow border-t border-gray-400"></div>
                <span class="flex-shrink mx-4 text-gray-400">Or</span>
                <div class="flex-grow border-t border-gray-400"></div>
            </div>
            <div className=' grid content-center'>
                <div className='mx-auto '>
                    <button onClick={() => { signInWithGoogle() }} className='flex justify-center bg-white  hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow '> <img className=' w-7' src={Google} alt="" /> Google Sign In</button></div>

            </div>
        </div >
    );
};

export default SocialLogin;