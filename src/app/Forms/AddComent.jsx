'use client'

import Image from "next/image"
import { FaUserSecret } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FetchComments, addComment } from "../actions/actions";
import { useEffect, useRef, useState } from "react";
import CommentList from "./CommentList";
import { useSession } from "next-auth/react";
const AddComent = ({blogId}) => {
    const ref=useRef();
    const session=useSession();
    const add=async(formData)=>{
    const aId=session?.data?.user?.email
     await addComment(blogId,formData,aId);
     ref.current?.reset()
     getCommnets()

    }
    const [commnets,setComments]=useState([])


    const getCommnets=async()=>{
        const comments=await FetchComments(blogId);
        setComments(comments)
        
    }
    useEffect(()=>{
       getCommnets()
    },[])
  return (
    <section className="">
        <form action={add} ref={ref} className="max-w-4xl px-3 gap-3 flex justify-start items-center rounded shadow-lg  mx-auto">
    <div className="bg -slate-200 p-2 rounded-full">
    <Image width={30} height={30} src={session?.data?.user?.image} className="w-8 border-2 border-slate-900 rounded-full h-8"/>
    </div>
    <textarea required  rows={1} name="text" type="text" className="w-full my-1 px-3 mx-1 py-2 shadow-md outline-none" placeholder="Add Comment"/>
    <button type="submit"><FaCircleArrowRight className="w-6 hover:text-blue-400 rotate-90 h-6"/></button>
    </form>
    <CommentList getCommnets={getCommnets} comments={commnets}/>
    </section>
  )
}

export default AddComent