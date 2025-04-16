import React, { Fragment } from 'react'
import vactor from "../assets/images/vactor.png"
import { GoArrowUpRight } from "react-icons/go";
import { FaBarsStaggered } from "react-icons/fa6";
import Hero from "../assets/images/hero.png"

export default function Banner() {
    return (
        <Fragment>
            <section className=' bg-secondary'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-12 items-center'>
                        <div className='col-span-6'>
                            <div className=''>
                                <span className='flex items-center gap-3'>
                                    <span className='text-white'><svg xmlns="http://www.w3.org/2000/svg" width="65" height="2" viewBox="0 0 65 2" fill="none">
                                        <path d="M0 1H65" stroke="#080808"></path>
                                    </svg>
                                    </span>
                                    <span className='text-black text-2xl font-bold font-Syne flex items-center gap-4'>
                                        Hello, I’m
                                        <img src={vactor} alt="" />
                                    </span>

                                </span>
                                <h1 className='text-6xl font-bold font-Syne'>Shahrukh </h1>
                                <h2 className='text-2xl font-bold font-Syne'>Alam</h2>

                                <div className='flex gap-2'>
                                    <p className=''>Frontend Developer</p>
                                    <p className=''>Based in pakistan</p>
                                </div>





                            </div>
                            <div className='flex gap-2 gap-4'>
                                <div className='col-span-2'>
                                    <div className='flex justify-end gap-2'>
                                        <a href="" className='font-bold flex  align-content-center gap-3 px-5 py-3 bg-black text-white rounded-lg'> Let's Talk  <GoArrowUpRight className='text-2xl' /> </a>
                                    </div>

                                </div>
                                <div className='col-span-2'>
                                    <div className='flex justify-end gap-2'>
                                        <a href="" className='font-bold flex  align-content-center gap-3 px-5 py-3 bg-white text-black rounded-lg'> Let's Talk  <GoArrowUpRight className='text-xl' /> </a>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='col-span-6'>
                            <div className='items-start'>
                                <img src={Hero} alt="" />
                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </Fragment>
    )
}
