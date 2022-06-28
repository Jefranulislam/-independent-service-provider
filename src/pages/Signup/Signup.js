import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,

    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigatelogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <form onSubmit={handleRegister} className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            placeholder="Full Name" />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />


                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-violet-600 text-white hover:bg-violet-700 focus:outline-none my-1"
                        >Create Account</button>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a className="underline border-b border-grey-dark text-grey-dark" href="#termsofservice">
                                Terms of Service
                            </a> and
                            <a className="underline border-b border-grey-dark text-grey-dark" href="#privacypolicy">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <p onClick={navigatelogin} className="cursor-pointer underline border-b border-violet text-violet">
                            Log in
                        </p>.
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Signup;