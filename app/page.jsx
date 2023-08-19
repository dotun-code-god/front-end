"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/general.css'
import { Roboto_Condensed } from 'next/font/google';

const roboto = Roboto_Condensed({subsets: ['latin'], weight : '300'});
const robotoBold = Roboto_Condensed({subsets: ['latin'], weight : '700'});

const page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/user', {
                method : 'POST',
                body: JSON.stringify({
                    email, password
                })
            })
            const data = await response.json();
            console.log(data);
            if(response.ok){
                setSuccess('Your login was successful');
            }
            setTimeout(() => setSuccess(''), 3000);
        } catch (error) {
            console.log(error);
        }
    }
    
    
  return (
      <div className='bg-[#fafafa] h-screen overflow-hidden' style={roboto.style} >
        <div className='shadow-[0_3px_3px_0_rgba(0,0,0,.1)] relative z-10'>
            <div className='bg-white px-10 py-3 flex items-center justify-between'>
                <Image
                    src={'/images/Nairarefill_logo.png'}
                    width={150}
                    height={150}
                    alt='Logo'
                />
                <div className='flex gap-4'>
                    <Link href={'/'}
                        className='bg-[#f48023] text-white px-4 py-1 rounded-lg font-bold flex items-center gap-2'
                    >
                        <Image
                            src={'/images/user_plus.fe0a78c5.svg'}
                            width={15}
                            height={15}
                        />
                        Register
                    </Link>
                    <Link href={'/'}
                          className='font-bold border-[#f48023] border-[0.1rem] py-1 px-3 rounded-lg text-[#f48023]'
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>

        <div className='flex items-center gap-12'>
            <div className='mt-24 md:ml-[10%] mx-[8%] md:w-[25%] w-full'>
                <p className='font-semibold text-xl -translate-y-8 text-green-500'>{success}</p>
                <h1 className='text-3xl font-bold tracking-wide' style={robotoBold.style}>We've Missed You</h1>
                  <p className='pt-4 text-lg leading-6 tracking-wider text-[#2c2c2c] font-[600]'>
                    Kindly signin and get first access to the very best, community and unlock more opportunities.
                </p>
                <form className='mt-4' onSubmit={loginUser}>
                    <label htmlFor="email" className='block'>Email: </label>
                    <input type="email" id='email' className='w-full py-1 pl-2 border-[0.1rem] border-black' value={email} onChange={(e) => setEmail(e.target.value)} />
                      <label htmlFor="password" className='block pt-2'>Password: </label>
                      <input type="password" id='password' className='w-full py-1 pl-2 border-[0.1rem] border-black' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <div className='mt-12'>
                          <button type='submit' className='font-bold bg-[#f48023] text-white w-full block text-center py-1'>
                            Login
                        </button>
                    </div>
                    <div className='mt-4 text-sm tracking-wider font-semibold'>
                        <p>Forgot username or password?</p>
                        <p className='mt-2'>Don't have an account? <Link href={'/'} className='text-blue-500'>Sign Up</Link></p>
                    </div>
                </form>
            </div>

            <div className='w-[75%] h-auto md:block hidden'>
                <Image 
                className='absolute -bottom-0 right-0 -z-1'
                      src={'/images/signIn_img.png'}
                      width={800}
                      height={800}
                      alt='Lady'
                />
            </div>
        </div>


    </div>
  )
}

export default page