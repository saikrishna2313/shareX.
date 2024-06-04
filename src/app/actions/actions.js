"use server"

const { PrismaClient } = require("@prisma/client")
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import {  signIn } from "../../auth"

 const prisma=new PrismaClient()

 export const Login=async(formData)=>{
  const action=formData.get('action')
  await signIn(action,{
    redirectTo:'/'
  })

 }
export const addBlog=async(formData,aId)=>{
 

    const title=formData.get('title')
    const image=formData.get('image')
    const description=formData.get('description')
    const category=formData.get('category')
    const authorId=await prisma.user.findFirst({
      where:{email:aId}
    })
    const blog=await prisma.blog.create({
      data:{
        title:title,
        image:image? image:null,
        description:description,
        category:category,
        authorId:authorId.id,
        authorName:authorId.username,
        authorImage:authorId?.image
      
      }
      
    }
    
)

redirect('/blogs')
}

export const SingleBlog=async(id)=>{

    const blog= await prisma.blog.findFirst({
        where:{id:id}
    })
    return blog

}


export const createUser=async(userd)=>{
   if(!userd){
    return;
   }
    const isExist=await prisma.user.findFirst({
      where:{
        email:userd?.email
      }
    })
 if(!isExist){
  const user=await prisma.user.create({
    data:{
      username:userd?.name,
      email:userd?.email,
      image:userd?.image

    }

  })
 }


}

export const updateBlog=async(formData,id)=>{
  const title=formData.get('title')
    const image=formData.get('image')
    const description=formData.get('description')
    const category=formData.get('category')
   const blog=await prisma.blog.update({
    where:{id:id},
    data:{
      title:title,
      image:image? image:null,
      description:description,
      category:category
    }
   })
   redirect(`/blogs/${id}`)
}


export const addComment=async(blogId,formData,aId)=>{
    const text=formData.get('text')
    const isExist=await prisma.user.findFirst({
      where:{
        email:aId
      }
    })
    const commnet=await prisma.comment.create({
      data:{
        text:text,
        blogId:blogId,
        authorId:isExist.id,
        authorName:isExist.username,
        authorImage:isExist?.image
      }
    })
   
    revalidatePath(`/blogs/${blogId}`)

}
export const FetchComments=async(id)=>{
  const commnets=await prisma.comment.findMany({
    where:id?{
      blogId:id
    }:{},
    orderBy:{
      createdAt:'desc'
    }
  })
  return commnets
 
}

export const DeleteComment=async(id)=>{
  const deleteComment=await prisma.comment.delete({
    where: id?{
      id:id
    }:{}
  })
}


export const DeleteB=async(id)=>{
  const deleteComments=await prisma.comment.deleteMany({
    where: id?{
      blogId:id
    }:{}
  })
  const deleteBlog=await prisma.blog.delete({
    where:id?{
      id:id
    }:{}
  })
  redirect('/blogs')
}
export const myUser=async(eml)=>{
  const user=await prisma.user.findFirst({
    where:{
      email:eml
    }
  })
  return user?.id
}