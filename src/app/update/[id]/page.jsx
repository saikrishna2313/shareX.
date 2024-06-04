import React from 'react'

import { PrismaClient } from '@prisma/client'
import UpdateBlog from '../../../components/UpdateBlog'
const prisma=new PrismaClient()
const page = async({params}) => {
     const blog=await prisma.blog.findFirst({
        where:{
            id:params?.id
        }
     })
  return (
  
      
      <section className='min-h-screen flex justify-center items-center  w-full'>
        
   <UpdateBlog blog={blog} params={params}/>
    </section>
   
  )
}

export default page