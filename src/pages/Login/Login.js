import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();

    const navigateforgatpass = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('sent email');
    }


    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    if (user) {
        console.log("User Logged in")
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    return (

        <div className='py-28'>
            <h1 className='text-center text-2xl'>Log In !</h1>

            <form onSubmit={handleSubmit} className="bg-white mx-auto w-2/4 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input ref={emailRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="email"></input>
                </div>
                <div className="mb-6">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input ref={passwordRef} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"></input>
                    <p className="text-red text-xs italic">Please try to login google for better experience </p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded" type="submit">
                        Sign In
                    </button>
                    <a onClick={navigateforgatpass} className="inline-block align-baseline font-bold text-sm text-violet hover:text-violet-darker" href="#forget" >
                        Forgot Password?
                    </a>
                </div>
                <SocialLogin></SocialLogin>
            </form>


        </div>
    );
};

export default Login;