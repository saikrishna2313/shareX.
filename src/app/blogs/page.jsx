    import { PrismaClient } from "@prisma/client"
 
import Link from "next/link";
import Search from '../../components/Search'
import Image from "next/image";

const prisma=new PrismaClient();
const page = async({searchParams}) => {
  const query=searchParams?.query;
    const blogs=await prisma.blog.findMany({
      
      where:query?{
        OR : [
          {title : {contains: query, mode: 'insensitive'}},
          {category : {contains: query, mode: 'insensitive'}},
          {description:{contains:query,mode:'insensitive'}}
        ]


      }:{},
      orderBy:{
        published:'desc'
      }
})
  return (
    <section className='min-h-screen min-w-screen max-sm:mt-10 overflow-x-hidden   relative  px-10  gap-1 justify-center items-center mt-8 flex  flex-col w-screen'>
   <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
   <div className="fixed top-14 left-0 right-0" >
   <Search/>
   </div>
  <section className="mt-16 md:mt-24 justify-center items-center md:flex md:flex-wrap ">
  {
    blogs.map((blog)=>{
        return (
           
              <section key={blog?.title} className="mx-2">
            
            <section   className="w-[400px]  text-start  my-3 p-3 bg-white rounded-lg shadow-lg">
            <Link href={`/profile/${blog?.authorId}`} className='flex justify-start items-center gap-1 my-1 py-2'>
           <Image width={300} quality={100} height={400} src={blog?.authorImage} className='h-6 w-6 rounded-full border-2'/>
          <p>{blog?.authorName}</p>
        </Link>
              <Image width={300} height={400} src={blog?.image} className="w-full h-44 object-cover rounded-t-lg" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{blog.category}</p>
                <p className="mt-2 text-gray-700">{blog.description.substring(0,100)}<span className="text-blue-500 pl-4">Read more...</span></p>
              <Link href={`/blogs/${blog?.id}`} className="px-4 py-1 bg-blue-500 font-semibold text-sm mt-2 text-white rounded-sm uppercase">Read now</Link>
              </div>
               
        
            </section>
            
            </section>
             
          );
    })
   }
  </section>
    </section>
  )
}

export default page