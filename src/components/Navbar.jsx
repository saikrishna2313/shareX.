'use client'
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { IoMdLogIn } from "react-icons/io";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import {signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Login, createUser } from "../app/actions/actions";
import { FaBars, FaUserLarge } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";

import { FcGoogle } from "react-icons/fc";
import MyProfile from '../components/MyProfile'
import { auth } from "../auth";

const Navbar = () => {


    const [open,setOpen]=useState(false)
    const pathname=usePathname();
   
    const session=useSession()
     
    const user=session?.data?.user
    const createNewUser=async()=>{
     
      await createUser(user)
     
    }
    

  
   


   useEffect(()=>{
    if(session){
      createNewUser();
      
    }
   },[])
    

  return (
    <nav className='flex fixed shadow-sm max-sm:items-center  max-sm:justify-between max-sm:pr-8  max-sm:gap-20  max-sm:px-2  top-0 max-sm:pb-6 left-0 bg-white z-[100] justify-center gap-5 px-20 py-4 items-center w-full'>
      <section className="sm:hidden">

        
      {
        !open?<button onClick={()=>setOpen(!open)}><FaBars className="h-6 w-6"/> </button> : <button onClick={()=>setOpen(!open)}><ImCancelCircle  className="h-6 w-6"/></button>
      }
     
        </section>  


        <section onClick={()=>setOpen(!open)} className={`md:hidden ${!open&&'translate-x-[-500px]'} flex flex-col justify-start items-center transition-all duration-300 absolute top-16 mt-2 left-0 w-[50%] h-screen bg-slate-100`}>
        <Link href="/" className={`  shadow-md border max-md:pl-3 max-md:w-full max-md:text-lg flex justify-start  items-center gap-2 px-4 py-1 ${pathname=="/"?'bg-slate-800 text-white':'text-slate-800 bg-white'} rounded font-semibold`}>
        <FaHome />
        Home
    </Link>
    {
      session.status==="authenticated"&&  <Link href="/addBlog" className={`  shadow-md border max-md:pl-3 max-md:w-full max-md:text-lg flex justify-start  items-center gap-2 px-4 py-1 ${pathname=="/addBlog"?'bg-slate-800 text-white':'text-slate-800 bg-white'} rounded font-semibold`}>
      <TfiWrite/>
      Write</Link>
    }
      
      {
        session.status==="authenticated"&&<Link href="/blogs" className={`  shadow-md border max-md:pl-3 max-md:w-full max-md:text-lg flex justify-start  items-center gap-2 px-4 py-1 ${pathname=="/blogs"?'bg-slate-800 text-white':'text-slate-800 bg-white'} rounded font-semibold`}>
        <TbArrowRoundaboutRight />
         Blogs</Link>
      } 
        {
        session.status==="authenticated"&&<MyProfile/>
      }
     

          
       
        {
          session.status==="authenticated"?<div className="w-full">
            {/* <img className="w-8 h-8 rounded-full border-2 border-blue-400" src={user?.image}/> */}
            <button onClick={()=>signOut()} className="shadow-md border w-full  bg-white text-lg  max-sm:px-2  flex justify-start font-semibold items-center gap-2  py-1 rounded text-slate-800">
            <CiLogout className="w-6 h-6" />
              <span className="font-semibold">Logout</span></button>            
          </div>:<form action={Login} className='w-full'>
        <button type="submit"  name="action" value='google'  className={`shadow-md border w-full  bg-white text-lg  max-sm:px-2  flex justify-start font-semibold items-center gap-2  py-1 rounded text-slate-800`}><FcGoogle className="w-6 h-6"/>
         <span>SignIn</span>
         </button>
    </form>  
        }
     
        </section>
      <Link href="/" className="text-2xl md:hidden  font-semibold  capitalize">
     
      <h1 className="text-3xl font-bold text-gray-900">
         <span className="text-blue-600 mt-2">shareX.</span>
        </h1></Link>

       
   




      <section className="flex justify-center max-sm:hidden items-center gap-4">
      <Link href="/" className={`shadow-md border max-sm:px-2 max-sm:text-sm flex justify-center items-center gap-2 px-4 py-1 ${pathname=="/"?'bg-slate-800 text-white':'text-slate-800 bg-white'} rounded font-semibold`}>
        <FaHome />
        Home
    </Link>
     {
      session.status==="authenticated"&& <Link href="/addBlog" className={`shadow-md border max-sm:px-2 max-sm:text-sm flex justify-center items-center gap-2 px-4 py-1 ${pathname=="/addBlog"?'bg-slate-800 text-white':'text-slate-800 bg-white'} rounded font-semibold`}>
      <TfiWrite/>
      Write</Link>
     }
      
     {
      session.status==="authenticated"&& <Link href="/blogs" className={`shadow-md border max-sm:px-2 max-sm:text-sm flex justify-center items-center gap-2 px-4 py-1 ${pathname=="/blogs"?'bg-slate-800 text-white':'text-slate-800 bg-white'} rounded font-semibold`}>
      <TbArrowRoundaboutRight />
       Blogs</Link> 
     }
      {
        session.status==="authenticated"&&<MyProfile/>
      }
        <div>
        {
          session.status==="authenticated"?<div>
            {/* <img className="w-8 h-8 rounded-full border-2 border-blue-400" src={user?.image}/> */}
            <button onClick={()=>{
              const is=confirm("Logout?")
              if(is){
                signOut()
              }
            }} className="shadow-md w-full border  hover:bg-slate-950 hover:text-slate-100 text-lg  max-sm:px-4 max-sm:text-sm flex justify-center items-center gap-2 px-4 py-1 rounded text-slate-800">
               <CiLogout className="w-6 h-6 font-semibold" />
               <span className="font-semibold">Logout</span>
              </button>            
          </div>: <form action={Login} className=' flex  justify-center items-center '>
        <button type="submit"  name="action" value='google'  className={`shadow-md border text-lg  max-sm:px-2 max-sm:text-sm flex justify-center items-center gap-2 px-4 py-1 rounded text-slate-800`}><FcGoogle className="w-4 h-4"/>
         <span>SignIn</span>
         </button>
    </form>  
        }
      </div>
        </section> 
     
    </nav>
  )
}

export default Navbar