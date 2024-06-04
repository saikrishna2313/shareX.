import { PrismaClient } from "@prisma/client";
import ProfileDetails from "../../../components/ProfileDetails";
import UserPosts from '../../../components/UserPosts'
import { auth } from "../../../auth";
import { redirect } from "next/navigation";


const page = async({params}) =>{
  const prisma=new PrismaClient();
  const status=await auth()
  if(!status){
    redirect('/')
  }
  const user=await prisma.user.findFirst({
    where:{
        id:params.id
    }
  })

  const blogs=await prisma.blog.findMany({
    where:{
        authorId:params?.id,
    },
    orderBy:{published:'desc'}
  })
   
   
  return (
    <section className="min-h-screen mt-10 overflow-x-hidden flex mx-auto max-w-screen  flex-col justify-start items-center">
      
     <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
       
        <ProfileDetails user={user}/>
    
        <UserPosts user={user}/>
    </section>
  )
}

export default page