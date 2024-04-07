import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div className="grid h-screen place-content-center bg-slate-950 px-4">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-700">404</h1>

                <p className="mt-4 text-gray-500 text-xl">Cann't found this page.</p>

                <Link
                    to={'/'}
                    className="mt-6 inline-block rounded bg-lime-500 px-5 py-3 text-sm font-medium text-white hover:bg-lime-600 focus:outline-none focus:ring"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage
