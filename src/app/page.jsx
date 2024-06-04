import React from 'react'
import one from '../../public/one.png'
import Image from 'next/image'
import { Login } from './actions/actions'
import { FcGoogle } from 'react-icons/fc'
import { auth } from '../auth'
import Link from 'next/link'
const page = async() => {
  const status=await auth()
  
  return (
   <section className='h-screen mt-16 w-full'>
    <div class="absolute top-0 z-[-2] h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
   
   <section className='flex justify-center max-sm:flex-col-reverse max-sm:flex items-center mt-6'>
    <section>
    <div className="flex flex-col items-center justify-center max-sm:h-auto h-screen">
      <main className="flex flex-col items-center justify-center flex-1 w-full max-sm:px-4 px-20 text-center">
        <h1 className="text-5xl  max-sm:text-3xl font-bold text-gray-900">
          Welcome to <span className="text-blue-600">shareX.</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl">
          shareX is a platform where different users can share their thoughts and knowledge. Join us and start sharing your insights today!
        </p>
        <div className={`space-x-4 ${status?"flex flex-col":"flex"}`}>
          <div  href="" className={`${!status?'px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300':""}`}>
           
           {
             !status&&<form action={Login} className=' flex  justify-center items-center '>
             <button type="submit"  name="action" value='google'  className={`shadow-md text-white max-sm:px-2 max-sm:text-sm flex justify-center items-center gap-2 px-4 py-1 rounded font-semibold`}>
               Get Started
             
              </button>
         </form>

           }   
          </div>
          <Link href="/blogs" className='px-4 py-2 border-2 border-blue-500 text-lg font-semibold text-blue-500  rounded-full hover:bg-blue-500 hover:text-white'>Read Blogs</Link>
        </div>
      </main>

     
    </div>
    </section>
    <Image quality={100} className='mt-5 max-sm:w-[300px] max-sm:ml-3 max-sm:mt-20' src={one} />
   </section>
   </section>
  )
}

export default page