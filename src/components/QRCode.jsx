import React, { useState, useEffect } from 'react';
import { Toaster, toast } from "react-hot-toast";

function QRCode({ url }) {
    const [qrCodeUrl, setQRCodeUrl] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // Set loading state to true when the URL changes
        generateQRCode(url);
    }, [url]);

    const generateQRCode = (url) => {
        const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;

        fetch(apiUrl)
            .then(response => response.url)
            .then(qrCodeUrl => {
                setQRCodeUrl(qrCodeUrl);
                setLoading(false); // Set loading state to false after fetching the QR code URL
            })
            .catch(error => {
                console.error('Error generating QR code:', error)
                toast.error("Error generating QR Code.");
                setLoading(false); // Set loading state to false if an error occurs
            });
    };

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <div className='flex items-center justify-center'>
                {loading ? (
                    <div className="w-14 h-14 bg-gray-700 rounded animate-pulse"></div> // Display loading indicator while fetching the QR code URL
                ) : (
                    qrCodeUrl && <img className='border border-2 rounded bg-gray-600 w-14 h-14' src={qrCodeUrl} alt="QR Code" />
                )}
            </div>
        </>
    );
}

export default QRCode;
