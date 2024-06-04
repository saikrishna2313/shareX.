'use client'

import Image from "next/image"
import cover2 from '../../public/cover2.jpg'
import { useEffect, useState } from "react"
import { updateBlog } from "../app/actions/actions"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const UpdateBlog = ({blog,params}) => {
  const session=useSession()
  const router=useRouter()
  if(session.status==="unauthenticated"){
      router.push('/')
      
  }
  const [image,setImage]=useState(blog?.image)
  const [title,setTitle]=useState(blog?.title)
  const [description,setDescription]=useState(blog?.description)
  const [category,setCategory]=useState(blog?.category)
  
  
  const updatePost=async(formData)=>{
     
     await updateBlog(formData,params?.id)


  }

  return (
    <section className="w-screen overflow-x-hidden flex justify-center  max-sm:flex-col max-sm:justify-start max-sm:items-start items-center">
    
      <section className='w-[50%] xl:flex hidden  border-r-2 max-sm:w-full  sm:min-h-screen overflow-hidden '>
         <Image src={cover2} className='w-full hover:scale-110 transition-all duration-300  h-full'/>
      </section>
      <section className="w-[50%] max-sm:w-full  px-10">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
        <h1 className="text-xl font-semibold text-slate-900 text-center py-3 px-3">Update the Blog✍📝</h1>
          <form action={updatePost} className="flex justify-center w-full items-center gap-2 flex-col px-5 py-5 bg-slate-100 shadow-xl rounded-lg">
           
           <input value={image} onChange={(e)=>setImage(e.target.value)} name="image" type="text" id="image" className="px-3 py-1 w-full shadow-sm text-sm text-slate-900 " placeholder="Add Image URL"/>
           <input value={title} onChange={(e)=>setTitle(e.target.value)} name="title" type="text"  placeholder="Title*" className="px-3 py-1 w-full shadow-sm text-sm text-slate-900 "/>
           <textarea value={description} onChange={(e)=>setDescription(e.target.value)} name="description" rows={5} type="text" id="image" cols={30}  className="px-3 py-1  w-full shadow-sm text-sm text-slate-900 " placeholder="Description"/>
           <input value={category} onChange={(e)=>setCategory(e.target.value)} name="category" type="text" placeholder="Category" className="px-3 py-1 shadow-sm text-sm text-slate-900 w-full "/>
           <button type="submit" className="px-3 py-1 bg-slate-900 rounded-lg w-full text-white font-semibold uppercase">Update</button>

       </form>
      </section>
    </section>
      
  )
}

export default UpdateBlog