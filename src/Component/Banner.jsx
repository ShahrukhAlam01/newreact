import React, { Fragment } from 'react'
import vactor from "../assets/images/vactor.png"

export default function Banner() {
  return (
   <Fragment>
    <section className=' bg-secondary'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-12 items-center'>
                <div className='col-span-6'>
                    <div className=''>
                        <span className='flex items-center'>
                            <span className='text-white'><svg xmlns="http://www.w3.org/2000/svg" width="65" height="2" viewBox="0 0 65 2" fill="none">
                            <path d="M0 1H65" stroke="#080808"></path>
                            </svg>
                            </span>
                            <span className='text-black text-2xl font-bold font-Syne'>
                                Hello, I’m  
                                <img src={vactor} alt="" />                       
                            </span>

                        </span>
                        <h1 className='text-6xl font-bold font-Syne'>Shahrukh <br/> Alam</h1>


                    </div>

                </div>
                <div className='col-span-6'>
                    <div className=''>

                    </div>

                </div>

            </div>

        </div>
    </section>

   </Fragment>
  )
}
