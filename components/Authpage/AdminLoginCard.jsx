// import { useRouter } from "next/router";
// import { routes } from "../../../constants/Routes";
// import { AuthWrapper } from "../AuthWrapper";
// import { AuthLinks } from "../AuthLinks";

// export default function AdminLoginContent() {
//   const [email, setEmail]=useState('');
//   const [password, setPassword]=useState('')
//   const {postData, isLoading}= useHttpServices()

//   const body={email,password}
//   const router=useRouter()

//   const handleLogin = async(e)=>{
//     e.preventDefault()
//     const data = await postData("/admin/login", body)
//     if (data.status === 200) {
//       Cookie.set("token", data?.data?.token);
//       Cookie.set("isAdmin", true);
//       router.push(routes.profile);
//     }
  
//     console.log(data)
//   }
  
  
//   // const handleLogin = async (e) => {
//   //   e.preventDefault();
//   //   const data = await postData("/admin/login", body);
//   //   console.log(data);
//   // };
      



//   return (
//     <AuthWrapper>
//     <div className="bg-white mt-[70px]">
//       <div><AuthLinks active="adminlogin" /></div>
//       <div className="grid grid-cols-[1.15fr_1fr] text-white">


//         <div>
//           <Image
//             alt="logo"
//             src="/images/gtclogo.png"
//             height={400}
//             width={600}
//           />
//         </div>

//               <div className="p-[70px]">


//                 <span className='text-green-700 text-[24px]'>
//                 <h1 >GTC Builders Login</h1>
//                 <h1>A destination for all things with realestate</h1>
//                 </span>


//                 <div className="mt-[70px]">
//                      <h2 className="text-black text-[32px] font-bold mb-[10px]">Login</h2>
//                       <p className='text-black mb-[10px]'>Enter email and password to login</p>
//                       <form onSubmit={handleLogin}>
//                          <div className='flex flex-col mb-[12px]'>
//                             <div>
//                               <label><h3 className='text-black  pt-[10px]'>Email Address</h3></label>

//                             <input className=' border-2 w-full text-black rounded-[6px]  bg-transparent  mb-[30px] p-3' 
//                               value={email}
//                               onChange={(e)=>setEmail(e.target.value)}
//                               type={'text'}>
//                               </input>
//                             </div>
              
//                           <div className='mb-[30px]'>
//                             <label ><h3 className='text-black' >Password</h3></label>
//                               <input 
//                                 className='text-black w-full rounded-[6px] border-2 bg-transparent  p-3' 
//                                 value={password}
//                                 onChange={(e)=>setPassword(e.target.value)}
//                                 type={'password'}>
//                                 </input>
//                           </div>

//                             <button className='px-[100px] py-5 bg-[#28AE68] text-white font-semibold rounded-lg opacity-100' 
//                             type="submit">
//                              {isLoading ? <Loader size={20}/>:'Login'}
//                             </button>
//                           </div>
                
//                 </form>
//               </div>
//             {/* </form> */}
//           </div>
//         </div>
//       </div>
//       </AuthWrapper>
   
//   );
// }

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TextInput, Checkbox, PasswordInput, Group, } from '@mantine/core';
import { IconMailFast } from '@tabler/icons';
import { useForm } from '@mantine/form';
import { authPageConstants, basicsInfoConstants } from '../../constants/Basics';
import NormalButton from '../NormalButton';
import { showNotification } from '@mantine/notifications';

// authentication page 
// admin login page

export default function AuthCard() {
    // Submit function function
    function submit(value) {
        // Toast notification
        showNotification({
            title: "Success",
            message: "Admin Login as " + value.email.toString(),
            color: 'green',
        })
    }

    // Sign in form validations and initialization
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            termsOfService: false,
        },

        // Email validation
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });



    return (
        <>
            <div className="bg-white rounded-default shadow-lg w-full h-full flex laptop:flex-row flex-col-reverse space-x-2">
                {/* Left */}
                <div className="basis-1/2 p-2">
                    <div className="laptop:text-2xl text-lg font-bold my-4">
                        Welcome back to {basicsInfoConstants.name}
                    </div>
                    <div className="w-full">
                        {/* Sign in section */}
                        <form onSubmit={form.onSubmit((values) => submit(values))}>
                            {/* Email */}
                            <TextInput
                                withAsterisk
                                required
                                label="Email"
                                placeholder="your@email.com"
                                {...form.getInputProps('email')}
                            />
                            {/* Password */}
                            <PasswordInput
                                withAsterisk
                                placeholder="Password"
                                label="Password"
                                {...form.getInputProps('password')}
                            />

                            <Checkbox
                                mt="md"
                                label="I agree to term and conditions"
                                {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                            />

                            {/* Submit button */}
                            <Group position="right" mt="md">
                                <NormalButton type="submit">
                                    <div>
                                        Submit
                                    </div>
                                    <div>
                                        <IconMailFast />
                                    </div>
                                </NormalButton>
                            </Group>
                        </form>
                        {/* Register link */}
                        
                    </div>
                </div>
                {/* Right */}
                <div className="laptop:flex justify-center items-center relative w-full basis-1/2 hidden">
                    <Image src={authPageConstants.loginImgPath} className="rounded-r-default brightness-50" objectFit="cover" width={600} height={600} alt="auth page image" />
                    <div className="absolute m-auto text-4xl font-bold text-white">
                        {basicsInfoConstants.name}
                    </div>
                </div>
            </div>

        </>
    )
}