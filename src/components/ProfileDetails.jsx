import Image from 'next/image'
import React from 'react'

import { RiMapPinUserFill } from "react-icons/ri";
const ProfileDetails = ({user}) => {
  return (
    <section className='mt-20'>
      <div className='px-10 flex justify-center items-start gap-1 my-6 '>
      <h1 className='text-xl font-semibold text-blue-500'>User Details</h1>
      <RiMapPinUserFill className='w-6 text-blue-400 h-6'/>
      </div>
        {/* <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div> */}
        <section className='gap-5 rounded-md px-5 py-4 max-sm:rounded-none text-white flex justify-start items-center'>
        <Image src={user?.image} width={150} height={150}  className='h-[150px] max-sm:h-[130px] shadow-xl border-blue-300  rounded-full border-2'/>
       <div className='flex flex-col items-start gap-2 justify-center '>
       <h1 className='text-xl max-sm:text-lg font-semibold text-slate-900'>{user?.username}</h1>
        <h1 className='text-slate-900 max-sm:text-sm'><span className='text-xl max-sm:text-sm font-semibold  text-blue-400'>Contact:</span> {user?.email}</h1>
       </div>
        </section>
    </section>
  )
}

export default ProfileDetails