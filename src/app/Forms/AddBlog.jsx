'use client'

import { useRef } from "react"
import { addBlog } from "../actions/actions"

import two from '../../../public/two.png'
import Image from "next/image"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
const AddBlog = () => {

    const ref=useRef()
    const router=useRouter()
    const session=useSession()
  
    if(session.status==="unauthenticated"){
        router.push('/')
        
    }
    const addPost=async(formData)=>{
           const aId=session?.data?.user?.email
          await addBlog(formData,aId);
           ref?.current?.reset()
    }
 
  return (
    <section className="w-full sm:flex justify-center max-sm:items-start max-sm:justify-start items-center">
      <div class="absolute top-0 -z-10 h-full w-full bg-white bg-opacity-5"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
      <section className='w-[50%] xl:flex hidden border-r-2 justify-center items-center min-h-screen overflow-hidden bg-slate-100  p-0'>
         <Image src={two} quality={100} className='w-[400px] max-sm:hidden hover:scale-110 transition-all duration-300  h-full'/>
      </section>
      <section ref={ref} className="w-[50%] max-sm:w-[100%] max-sm:px-12 lg:px-24">
        <h1 className="text-xl font-semibold text-slate-950 text-center py-3 px-3">Write Blog</h1>
          <form action={addPost} className="flex justify-center w-full items-center gap-2 flex-col px-5 py-5 bg-slate-200  bg-opacity-25 shadow-xl rounded-lg">
           
           <input required name="image" type="text" id="image" className="px-3 py-1 outline-none  w-full shadow-xl text-sm border bg-white bg-opacity-40 backdrop:blur-xl  text-slate-950 font-medium" placeholder="Add Image URL"/>
           <input required name="title" type="text"  placeholder="Title*" className="px-3 py-1 outline-none  w-full shadow-xl text-sm bg-white bg-opacity-40 backdrop:blur-xl text-slate-950 font-medium"/>
           <textarea required name="description" rows={5} type="text" id="image" cols={30}  className="px-3 py-1 outline-none   w-full bg-white bg-opacity-40 backdrop:blur-xl shadow-xl text-sm text-slate-950 font-medium" placeholder="Description"/>
           <input required name="category" type="text" placeholder="Category" className="px-3 py-1 outline-none  shadow-xl text-sm bg-white bg-opacity-40 backdrop:blur-xl text-slate-950 w-full font-medium"/>
           <button type="submit" className="px-3 py-1 bg-slate-900 rounded-lg w-full text-white font-medium uppercase">Submit</button>

       </form>
      </section>
    </section>
      
  )
}

export default AddBlog