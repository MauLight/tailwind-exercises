import { useState, type ReactElement } from 'react'

export const Boxes = (): ReactElement => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div className='grid grid-cols-3 gap-1'>
            {/* Navbar */}
            <div className='bg-red-500 col-span-3 h-20'></div>
            {/* Hero */}
            <div className='bg-green-500 h-screen col-span-3'>
                <div className="grid grid-cols-2 h-full">
                    <div className='bg-yellow-500 h-full'>
                        <div className="h-full grid grid-rows-3 gap-y-5">
                            <div className="row-span-1 flex justify-center items-end">
                                <h1 className='text-9xl'>Hey there</h1>
                            </div>
                            <div className="row-span-2 flex flex-col items-center justify-start gap-y-5">
                                <p className='text-3xl'>this is an example of a subheader text</p>
                                <button onClick={() => { setIsClicked(!isClicked) }} className='h-10 w-[150px] bg-blue-500 hover:bg-indigo-500 shadow-md shadow-black/50 hover:shadow-black/70 active:shadow-black/50 transition-all duration-200 text-white'>
                                    {
                                        isClicked ? (
                                            <div className='flex justify-center items-center gap-x-2'>
                                            <div className="inline-block h-6 w-6 rounded-full border-2 border-white border-e-transparent animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite] align-[-0.125em]"></div>
                                            <p className='text-white'>Loading</p>
                                            </div>
                                        )
                                        :
                                        'Click me'
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-purple-500 h-full'>
                        <img src='https://i.postimg.cc/506s0rck/photo.png' className='w-full object-cover' />
                    </div>
                </div>
            </div>
            {/* Second Section */}
            <div className='bg-blue-500 col-span-3 h-screen'>

            </div>
        </div>
    )
}
