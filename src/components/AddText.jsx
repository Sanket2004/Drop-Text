import React, { useState } from 'react'
import 'firebase/firestore';
import db from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function AddText() {


    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [uuid, setUUID] = useState('');
    const [uploadedAt, setUploadedAt] = useState('');
    const navigate = useNavigate();


    const generateUUID = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let uuid = '';
        for (let i = 0; i < 5; i++) {
            uuid += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return uuid;
    };

    const currentTime = new Date(); // Get the current timestamp as a Date object

    const formattedDateTime = currentTime.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }); // Format the datetime in the desired format

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Generate a new UUID
        const newUUID = generateUUID();
        setUUID(newUUID);

        // Store UUID and text in Firebase
        const colRef = collection(db, "data")

        addDoc(colRef, {
            title: title,
            text: text,
            uuid: newUUID,
            uploadedAt: formattedDateTime,
        }).then(() => {
            console.log('Data added successfully');
            // Redirect to the URL corresponding to the new data
            navigate('/' + newUUID);
            toast.success("Your data has been added!");
        }).catch((error) => {
            console.error('Error adding data: ', error);
            toast.error("There was an issue with your submission.");
        });

        // Clear the input fields
        setText('');
        setTitle('');
        toast.success(newUUID + " is your unique ID", { icon: '👏', duration: 5000 });
    };


    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="bg-slate-950 text-white w-full h-screen">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <header className="flex justify-between	pb-8">
                        <Link to={'/'} className='bg-lime-500 h-8 w-8 rounded flex place-items-center justify-center'>
                            <i className="fa-solid fa-chevron-left text-sm"></i>
                        </Link>
                    </header>
                    <div className="w-full px-4 mx-auto max-w-lg text-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                        <h1 className="text-2xl font-bold sm:text-3xl mb-8">Enter Text To Share</h1>
                        <form onSubmit={handleSubmit} className='w-full'>
                            <div>
                                <label htmlFor="title" className="sr-only">Title</label>
                                <input
                                    type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                                    className="w-full rounded-lg border border-2 border-gray-500 p-4 pe-12 mb-4 text-sm shadow-sm bg-[#78787836]"
                                    placeholder="Enter title"
                                    required
                                />
                                <label htmlFor="text" className="sr-only">Text</label>
                                <textarea

                                    type="text" value={text} onChange={(e) => setText(e.target.value)}
                                    className="w-full rounded-lg border border-2 border-gray-500 p-4 pe-12 mb-4 text-sm shadow-sm bg-[#78787836] resize-none"
                                    placeholder="Enter Text"
                                    rows="15"
                                    aria-multiline
                                    required
                                />
                                <button
                                    type="submit"
                                    className="inline-block rounded-lg bg-lime-500 hover:bg-lime-600 px-5 py-3 w-full text-sm font-medium text-white"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddText
