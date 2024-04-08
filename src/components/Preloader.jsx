import React from 'react'

function Preloader() {
    return (
        <div className="w-full h-screen	bg-slate-950 overflow-hidden	">

            <span class="relative flex h-16 w-16 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-16 w-16 bg-lime-500"></span>
            </span>

            <p className="text-sm absolute font-black bottom-0 text-gray-400 left-1/2 translate-x-[-50%] translate-y-[-50%]">DROP TEXT - 2024</p>


            {/* <div className='fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]	'> */}
            {/* <button type="button" className=" flex p-4 text-grey" disabled>
                    <svg className="animate-spin h-12 w-12 mr-3 " fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"/></svg>
                </button> */}
            {/* <h1 className="animate-bounce text-xl text-white uppercase font-black" >Loading</h1>
            </div>
            <p className="text-sm absolute bottom-0 text-gray-400 left-1/2 translate-x-[-50%] translate-y-[-50%]">DROP TEXT - 2024</p> */}
        </div>
    )
}

export default Preloader
