import React from 'react';

const Hero = () => {
    return (
        <div>
            <section class="bg-white ">
                <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-3xl font-bold tracking-wide text-gray-800 leading-4	 lg:text-5xl">
                                Delicious Affordable <br /> <span className='text-violet-700  font-bold italic'>  Home Made </span> <br /> Meals For You.
                            </h1>

                            <div class="mt-8 space-y-5">
                                <p class="flex items-center -mx-2 text-gray-700 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="mx-2">100% Home Made Meals</span>
                                </p>

                                <p class="flex items-center -mx-2 text-gray-700 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="mx-2">Delivery with in 1 Hours</span>
                                </p>

                                <p class="flex items-center -mx-2 text-gray-700 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="mx-2">Organic Food</span>
                                </p>
                            </div>
                        </div>

                        <div class="w-full mt-8 bg-transparent  rounded-md lg:max-w-sm  focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300  focus-within:ring-opacity-40">
                            <button type="button" class="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-violet-600 rounded-md hover:bg-violet-400 focus:outline-none focus:bg-blue-400">
                                Order Now
                            </button>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img class="object-cover w-full h-full mx-auto rounded-lg lg:max-w-2xl" src="https://images.unsplash.com/photo-1521732670659-b8c918da61dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Food photo" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;