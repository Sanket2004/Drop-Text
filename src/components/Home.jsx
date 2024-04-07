import React, { useState } from 'react'
import 'firebase/firestore';
import db from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { Link, useNavigate } from "react-router-dom";
import AddText from './AddText';

function Home() {
    return (
        <div>
            <section className="bg-slate-950 text-white h-screen">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="w-full mx-auto max-w-3xl px-8 text-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                        <h1
                            className="bg-gradient-to-r from-lime-500 via-green-500 to-purple-600 bg-clip-text text-3xl uppercase font-extrabold text-transparent sm:text-5xl"
                        >
                            Drop Text.
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl text-gray-300 sm:text-l/relaxed">
                            Online text sharing platform for developers and designers. Here you can just  drop your text and share it with others.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link to={'/addText'}
                                className="block w-full rounded border border-lime-600 bg-lime-500 px-12 py-3 text-sm font-medium text-white hover:bg-lime-600 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            >New Text
                            </Link>

                            <Link to={'/getText'}
                                className="block w-full rounded border border-lime-600 px-12 py-3 text-sm font-medium text-white hover:bg-lime-500 focus:outline-none focus:ring active:bg-lime-500 sm:w-auto"
                            >
                                Get Text
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
