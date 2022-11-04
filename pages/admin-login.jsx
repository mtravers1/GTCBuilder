import Head from 'next/head'
import Image from 'next/image'

import Links from 'next/link'


//working on adding tailwind to new login page
export default function Newlogin() {
      return (
        <div className='bg-white mt-[70px]'>
        <div className="grid grid-cols-[1.15fr_1fr] text-white">
          
          <div >

          <Image alt ="logo" src='/gtclogo.png' height={400} width={600}/>  
            
              
              </div>



              <div className="p-[70px]">
                <span className='text-green-700 text-[24px]'>
                <h1 >GTC Builders Login</h1>
                <h1>A destination for all things with realestate</h1>
                </span>
                <div className="mt-[70px]">
              <h2 className="text-black text-[32px] font-bold mb-[10px]">Login</h2>
              <p className='text-black mb-[10px]'>Enter email and password to login</p>
                <span className=' relative flex justify-between border-b-2 '>
                  <ul className='flex gap-10 mb-[10px]'>
                  <li className='text-green-700 border-red-700 '>Login</li>
                  <li className='text-green-700 border-red-700 '>Register</li>
                  </ul>
                </span>
              <form>
                <div className='flex flex-col mb-[12px]'>
                  <div>
                  <label >
                  <h3 className='text-black  pt-[10px]'>Email Address</h3>
                </label>
                <input className='w-full rounded-[6px] bg-transparent border-white mb-[30px]' type={'text'}></input>
                </div>
              
                <div className='mb-[30px]'>
                  <label >
                  <h3 className='text-black' >Password</h3>
                </label>
                <input className='w-full rounded-[6px] bg-transparent border-black' type={'text'}></input>
                </div>
                <button className='px-[100px] py-5 bg-[#28AE68] text-white font-semibold rounded-lg opacity-100' type="submit">Login</button>
               
                </div>
                
                </form>
                </div>
                
              
              </div>

        </div>
        </div>
      )
    }