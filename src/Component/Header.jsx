import React, { Fragment } from 'react'
import Logo from "../assets/images/logo.png"
import { GoArrowUpRight } from "react-icons/go";
import { FaBarsStaggered } from "react-icons/fa6";

export default function Header() {
  return (
    <Fragment>
      <header className=' bg-transparent h-20 border-b flex items-center border-black '>
        <div className='container'>
          <div className='grid grid-cols-12 items-center'>
            <div className='col-span-9'>
              <div className='items-start'>
                <img src={Logo} alt="" />
              </div>
            </div>
            <div className='col-span-2'>
              <div className='flex justify-end gap-2'>
                <a href="" className='font-semibold flex justify-content-center align-content-center gap-3 p-3 '> Let's Talk  <GoArrowUpRight className='text-2xl' /> </a>
              </div>

            </div>
            <div className='col-span-1'>
              <div className='flex items-center justify-center bg-black  w-23 h-20 ml-3'>
                <a href=""><i><FaBarsStaggered className='text-white fs-3 flex justify-center items-center' /></i></a>
              </div>

            </div>

          </div>

        </div>

      </header>
    </Fragment>
  )
}
