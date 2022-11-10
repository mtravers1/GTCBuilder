
import Head from 'next/head'
import Image from 'next/image'
import {useState} from 'react'
import { useHttpServices } from '../../../hooks/useHttpServices'
import Links from 'next/link'
import { Loader } from '../../../components/Helpers'
import Cookie from 'js-cookie'
import { useRouter } from "next/router";
import { routes } from "../../../constants/Routes";


export default function AdminLoginContent() {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('')
  const {postData, isLoading}= useHttpServices()

  const body={email,password}
  const router=useRouter()

  const handleLogin = async(e)=>{
    e.preventDefault()
    const data = await postData("/admin/login", body)
    if (data.status === 200) {
      Cookie.set("token", data?.data?.token);
      Cookie.set("isAdmin", true);
      router.push(routes.profile);
    }
  
    console.log(data)
  }
  
  
  
  return (
    
    <div className="bg-white mt-[70px]">
      
      <div className="grid grid-cols-[1.15fr_1fr] text-white">


        <div className='bg-black'>
          <Image
            alt="logo"
            src="/images/gtclogo.png"
            height={400}
            width={600}
          />
        </div>

              <div className="p-[70px]">


                <span className='text-green-700 text-[24px]'>
                <h1 >GTC Builders Login</h1>
                <h1>A destination for all things with realestate</h1>
                </span>


                <div className="mt-[70px]">
                     <h2 className="text-black text-[32px] font-bold mb-[10px]">Admin Login</h2>
                      <p className='text-black mb-[10px]'>Enter email and password to login</p>
                      <form onSubmit={handleLogin}>
                         <div className='flex flex-col mb-[12px]'>
                            <div>
                              <label><h3 className='text-black  pt-[10px]'>Email Address</h3></label>

                            <input className=' border-2 w-full text-black rounded-[6px]  bg-transparent  mb-[30px] p-3' 
                              value={email}
                              onChange={(e)=>setEmail(e.target.value)}
                              type={'text'}>
                              </input>
                            </div>
              
                          <div className='mb-[30px]'>
                            <label ><h3 className='text-black' >Password</h3></label>
                              <input 
                                className='text-black w-full rounded-[6px] border-2 bg-transparent  p-3' 
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                type={'password'}>
                                </input>
                          </div>

                            <button className='px-[100px] py-5 bg-[#28AE68] text-white font-semibold rounded-lg opacity-100' 
                            type="submit">
                             {isLoading ? <Loader size={20}/>:'Login'}
                            </button>
                          </div>
                
                </form>
              </div>
            {/* </form> */}
          </div>
        </div>
      </div>
      // </AuthWrapper>
   
  );
}