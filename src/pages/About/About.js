import React from 'react';
import profile from '../../images/profile.jpg'

const About = () => {
    return (

        <div class="h-screen bg-gray-200  dark:bg-violet-900   flex flex-wrap items-center  justify-center  ">
            <div class="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
                <div class=" h-32 overflow-hidden" >
                    <img class="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                </div>
                <div class="flex justify-center px-5  -mt-12">
                    <img class="h-32 w-32 bg-white p-2 rounded-full   " src={profile} alt="" />

                </div>
                <div class=" ">
                    <div class="text-center px-14">
                        <h2 class="text-gray-800 text-3xl font-bold">Jefranul Islam Rakib</h2>
                        <a class="text-gray-400 mt-2 hover:text-violet-500" href="https://www.instagram.com/jefranulislamrakib/" target="BLANK()">@jefranulislamrakib</a>
                        <p class="mt-2 text-gray-500 text-sm">I am nobody . Curious to learn new technology and stuff, Still Learning New things everyday</p>
                    </div>
                    <hr class="mt-6" />
                    <div class="flex  bg-gray-50 ">
                        <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p><span class="font-semibold">226 </span> Followers</p>
                        </div>
                        <div class="border"></div>
                        <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p> <span class="font-semibold">129</span> Following</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;