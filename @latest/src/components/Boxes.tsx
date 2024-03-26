import { useState, type ReactElement } from 'react'
import reactImg from '../assets/react.svg'
import viteImg from '../../public/vite.svg'

export const Boxes = (): ReactElement => {
    const [isClicked, setIsClicked] = useState(false)
    const [plusOne, setPlusOne] = useState(0)

    const handleClick = () => {
        setPlusOne(plusOne + 1)
    }

    return (
        <div className='grid grid-cols-3 gap-1'>
            {/* Navbar */}
            <div className='bg-red-500 col-span-3 h-20'></div>
            {/* Hero */}
            <div className='bg-green-500 h-screen col-span-3'>
                <div className="grid grid-cols-1 xl:grid-cols-2 h-full">
                    <div className='bg-yellow-500 h-screen xl:h-full'>
                        <div className="max-xl:hidden h-full grid grid-rows-3 gap-y-5">
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
                        <div className="xl:hidden grid grid-cols-1 lg:grid-cols-2 h-full">
                            <div className='bg-yellow-500 h-screen xl:h-full'>
                                <div className="h-full grid grid-rows-3 gap-y-5">
                                    <div className="row-span-1 flex justify-center items-end">
                                        <h1 className='text-9xl text-ellipsis shrink-0'>Hey there</h1>
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
                            <div className='bg-purple-500 h-screen shrink-0'>
                                <img src='https://i.postimg.cc/506s0rck/photo.png' className='h-full w-full object-cover shrink-0' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-purple-500 h-screen shrink-0'>
                        <img src='https://i.postimg.cc/506s0rck/photo.png' className='h-full w-full object-cover shrink-0' />
                    </div>
                </div>
            </div>
            {/* Second Section */}
            <div className='bg-[#242424] col-span-3 h-screen flex items-center justify-center'>
                <div className="flex flex-col items-center gap-y-20">
                    <div className="flex gap-x-10">
                        <a href='https://vitejs.dev/' target='_blank' rel='noreferrer'>
                            <img src={viteImg} alt="tailwind" className='h-20 w-20 hover:[filter:drop-shadow(0_0_2em#646cffaa)]' />
                        </a>
                        <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
                            <img src={reactImg} alt="react" className='h-20 w-20 animate-spin [animation-duration:20s] hover:[filter:drop-shadow(0_0_2em#61dafbaa)]' />
                        </a>
                    </div>
                    <h1 className='text-5xl text-white'>Vite + React</h1>
                    <div className="flex flex-col gap-y-5 items-center">
                        <button onClick={handleClick} className='bg-[#10100e] border border-[#10100e] rounded-xl text-white h-10 px-4 hover:border-[#646cff]'>{`count is ${plusOne}`}</button>
                        <p className='text-sm flex gap-x-1 items-end text-white'>{'Edit'}<small>{'src/App.jsx'}</small>{'and save to text HMR'}</p>
                    </div>
                    <p className='text-gray-500'>{'Click on the Vite and React logos to learn more'}</p>
                </div>
            </div>
        </div>
    )
}
