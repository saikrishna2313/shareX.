'use client'
import { PrismaClient } from '@prisma/client'
import { useSession } from 'next-auth/react'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaUserLarge } from 'react-icons/fa6'
import { myUser } from '../app/actions/actions'
import { useRouter } from 'next/navigation'
const MyProfile = () => {
    const session=useSession();
    const eml=session?.data?.user.email
    const [userId,setUserId]=useState('')
    const router=useRouter()
    if(session.status==="unauthenticated"){
        router.push('/')
        
    }
   
    const getUserId=async()=>{
        if(!eml){
            return
        }
        const user=await myUser(eml);
        if(user){
            setUserId(user)
        }
    }
    useEffect(()=>{
      
         getUserId();

    },[session])


  return (
    <Link href={`/profile/${userId}`} className={`shadow-md border  max-md:pl-3 focus:bg-black focus:text-white  max-md:w-full bg-white max-md:text-lg flex justify-start  items-center gap-2 px-4 py-1  rounded font-semibold`}>
    <FaUserLarge />
     Profile</Link>
  )
}

export default MyProfile
