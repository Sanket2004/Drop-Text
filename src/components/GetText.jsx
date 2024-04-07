import React, { useState } from 'react'
import 'firebase/firestore';
import db from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { Link, useNavigate } from "react-router-dom";

function GetText() {


    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleSubmit2 = (event) => {
        event.preventDefault();
        // Navigate to the route with the provided uuidParam
        navigate(`/${inputValue}`);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="bg-slate-950 text-white w-full h-screen">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <header className="flex justify-between	pb-8">
                    <Link to={'/'} className='bg-lime-500 h-8 w-8 rounded flex place-items-center justify-center'>
                        <i className="fa-solid fa-chevron-left text-sm"></i>
                    </Link>
                </header>
                <div className="w-full px-8 mx-auto max-w-lg text-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <h1 className="text-2xl font-bold sm:text-3xl mb-8">Get started today!</h1>
                    <form onSubmit={handleSubmit2} className='w-full'>
                        <div>
                            <label htmlFor="text" className="sr-only">Code</label>
                            <input
                                type="text" value={inputValue} onChange={handleInputChange}
                                className="w-full rounded-lg border border-2 border-gray-500 p-4 pe-12 mb-4 text-sm shadow-sm bg-[#78787836]"
                                placeholder="Enter short code"
                                required
                            />
                            <button
                                type="submit"
                                className="inline-block rounded-lg bg-lime-500 hover:bg-lime-600 px-5 py-3 w-full text-sm font-medium text-white"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetText
