import { PrismaClient } from "@prisma/client"
import Image from "next/image";
import Link from "next/link";

const UserPosts = async({user}) => {
    const prisma=new PrismaClient();
    const blogs=await prisma.blog.findMany({
        where:{
            authorId:user?.id
        },
        orderBy:{
            published:'desc'
        }
    })
  return (
    <section className="mt-10">
        {/* <div className="px-20  flex justify-center bg-slate-200 shadow-xl  border-2 border-slate-100 items-center">
        <h1 className="text-xl font-semibold text-blue-500">Blogs</h1>

    </div> */}
   <section key="jey" className="grid border-t-2 max-sm:mx-1 grid-cols-3 justify-center items-center  overflow-x-hidden mx-auto">
   
      {
        blogs.map((blog)=>{
            return(
       
               <section key={blog?.title}>
                 <Link href={`/blogs/${blog?.id}`} className="flex border relative bg-slate-100 flex-col justify-center items-center ">
                   <div>
                   <Image width={200} quality={100} height={100} src={blog?.image} className="object-cover w-[200px] h-[100px]"/>
                   </div>
                   <div className="absolute  flex justify-center bg-black bg-opacity-[30%] items-center top-0 left-0  right-0 w-full h-full">
                   <h1 className="p-2 text-sm font-semibold  rounded-xl    text-slate-200 ">{blog?.category}</h1>
                   </div>
                </Link>
                </section>
            )
        })
      }
   </section>
        </section>
  )
}

export default UserPosts