import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-auto w-3/4 border border-gray-100 rounded-sm shadow-lg p-5 my-5'>
            <h2 className='text-3xl bold text-center my-2'>Some FAQ for Assignments </h2>
            <div className=" border border-gray-100 rounded-sm shadow-sm p-5 py-5">
                <h3 className='text-2xl'>Difference between authorization and authentication</h3>
                <p>Authentication is the process of verifying who someone is and the authorization is the process of verify what specific applications files and data a user has access to. the situation is like some one enter the classroom late and teacher ask him/her Id or name when teacher verify that the student is under this class then him/her get entry for the class this called authentication now if student is male he will sit left side or student is female then she will sit right side that's called authorization</p>

            </div>
            <div className=" border border-gray-100 rounded-sm shadow-sm p-5 my-5">
                <h3 className='text-2xl'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    <br />
                    I can implement the authentication in More User friendly like redirect the user same url where the user had located , give profile image and send verification email to verify.
                </p>
            </div>
            <div className=" border border-gray-100 rounded-sm shadow-sm p-5 my-5">
                <h3 className='text-2xl'>What other services does firebase provide other than authentication</h3> <p>
                    There are many services which Firebase provides, Most useful of them are:

                    <li> Cloud Firestore  </li>
                    <li> Cloud Functions  </li>
                    <li> Authentication  </li>
                    <li> Hosting </li>
                    <li> Cloud Storage </li>
                    <li>Google Analytics </li>
                    <li> Predictions </li>
                    <li>Cloud Messaging </li>
                    <li>Dynamic Links </li>
                    <li>Remote Config</li>
                </p>
            </div>
        </div>
    );
};

export default Blogs;