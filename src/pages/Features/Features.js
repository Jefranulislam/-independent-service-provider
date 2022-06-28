import React from 'react';
import { useNavigate } from 'react-router-dom';

const Features = () => {
    const navigate = useNavigate('');
    const checkoutridrect = () => {
        navigate('/checkout');
    }
    return (
        <div class="bg-white " id='home#Features'>
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">explore our <br /> awesome <span class="underline decoration-violet-500">Home Made Foods</span></h1>

                <p class="mt-4 text-gray-500 xl:mt-6 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                </p>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    <div class="p-8 space-y-3 border-2 border-violet-400  rounded-xl">
                        <span class="inline-block text-violet-500 ">
                            <img className='rounded-lg' src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80" alt="" />
                        </span>
                        <h1 class="text-2xl font-semibold text-gray-700 capitalize ">230+ Locations</h1>
                        <p class="text-gray-500 ">
                            230+ Pickup points to deliver Meals
                            230+ Pickup points to deliver Meals
                        </p>
                        <a onClick={checkoutridrect} className="inline-flex p-2  cursor-pointer text-violet-500 capitalize transition-colors duration-200 transform bg-violet-100 rounded-full   hover:underline hover:text-violet-600 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>

                    <div class="p-8 space-y-3 border-2 border-violet-400 rounded-xl">
                        <span class="inline-block text-violet-500 ">
                            <img src="https://images.unsplash.com/photo-1542986130-d0c46350cf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='rounded-lg' alt="" />
                        </span>

                        <h1 class="text-2xl font-semibold text-gray-700 capitalize ">Fully Organic Food</h1>

                        <p class="text-gray-500 ">
                            All Foods are made by 100 % organic Food
                        </p>

                        <a onClick={checkoutridrect} class="inline-flex p-2 cursor-pointer text-violet-500 capitalize transition-colors duration-200 transform bg-violet-100 rounded-full   hover:underline hover:text-violet-600 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>

                    <div class="p-8 space-y-3 border-2 border-violet-400  rounded-xl">
                        <span class="inline-block text-violet-500 ">
                            <img src="https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='rounded-lg' alt="" />
                        </span>

                        <h1 class="text-2xl font-semibold text-gray-700 capitalize ">Birthday Catering</h1>

                        <p class="text-gray-500 ">
                            We Recive Birthday Celebraition Meals Ordewr
                        </p>

                        <a onClick={checkoutridrect} class=" cursor-pointer inline-flex p-2 text-violet-500 capitalize transition-colors duration-200 transform bg-violet-100 rounded-full hover:text-violet-600 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Features;