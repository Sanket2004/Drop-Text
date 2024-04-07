import { collection, query, where, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import db from '../firebase';
import { Toaster, toast } from "react-hot-toast";


function DataPage() {

    const [specificData, setSpecificData] = useState(null);
    const navigate = useNavigate();


    // Function to fetch specific data based on UUID
    const fetchSpecificData = (uuid) => {
        const colRef = collection(db, "data");
        const q = query(colRef, where("uuid", "==", uuid));
        console.log("calll");
        getDocs(q)
            .then((querySnapshot) => {
                if (querySnapshot.empty) {
                    console.log("No matching documents.");
                    toast.error("No Matching Documents Found!");
                    // Set specificData state to null or any default value if no data is found
                    setSpecificData(null);

                    // Navigate to '/' after a 3-second delay
                    setTimeout(() => {
                        navigate('/');
                    }, 3000); // 3000 milliseconds = 3 seconds

                    return;
                }


                // Assuming there's only one document matching the UUID
                querySnapshot.forEach((doc) => {
                    // Update specificData state with the data from the document
                    setSpecificData(doc.data());
                });
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    };

    const { uuidParam } = useParams();

    useEffect(() => {
        console.log('UUID Param:', uuidParam); // Log the uuidParam when it changes
        // Fetch specific data based on UUID
        if (uuidParam) {
            fetchSpecificData(uuidParam);
        }
    }, [uuidParam]);

    function handleCopyUrl() {
        // Get the current URL
        const url = window.location.href;

        // Write the URL to the clipboard
        navigator.clipboard.writeText(url)
            .then(() => {
                // URL copied successfully
                console.log('URL copied to clipboard:', url);
                // You can also show a success message if needed
                toast.success("Link copied to clipboard!", { position: "top-right" });
            })
            .catch((error) => {
                // Unable to copy URL to clipboard
                console.error('Error copying URL to clipboard:', error);
                toast.error("Failed to copy link to clipboard.", { position: "top-right" });
                // You can also show an error message if needed
            });
    }

    const [copied, setCopied] = useState(false);

    // Function to copy text to clipboard
    const copyTextToClipboard = () => {
        const textToCopy = specificData.text;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                toast.success("Text copied to clipboard!");
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000); // Reset the copied state after 2 seconds
            })
            .catch((error) => {
                console.error('Error copying text:', error);
                toast.error("Unable to copy text to clipboard.");
            });
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
                        <Link to={'/'}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </Link>
                        <Link onClick={handleCopyUrl}>
                            <i className="fa-solid fa-arrow-up-from-bracket"></i>
                        </Link>
                    </header>
                    {specificData ? (
                        <>
                            <h1 className="text-3xl font-bold sm:text-4xl mb-2 uppercase">{specificData.title}</h1>
                            <p className='font-bold text-xs text-gray-300'>UPLOADED AT: {specificData.uploadedAt}</p>
                            <div>
                                <div>
                                    <p className='font-bold mb-8 text-xl text-gray-300'>UUID: {specificData.uuid}</p>
                                    {/* <p className='font mb-6 text-xl uppercase font-black'>text</p> */}
                                    <div className='relative'>
                                        <p className="w-full border-2 border-slate-800 bg-[#78787836] rounded p-4 text-xl whitespace-pre-wrap">{specificData.text}</p>
                                        <button onClick={copyTextToClipboard} className='absolute top-0 right-0 '>
                                            {copied ? (<i className="fa-solid fa-check p-4"></i>) : (<i className="fa-regular fa-copy p-4"></i>)}
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </>
                    ) : <h1>Loading..</h1>}
                </div>
            </div>
        </>
    )
}

export default DataPage
