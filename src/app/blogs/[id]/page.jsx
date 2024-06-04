

import AddComent  from '../../Forms/AddComent'
import { SingleBlog } from '../../actions/actions';
import Image from 'next/image';
import DeleteBlog from '../../../components/DeleteBlog'
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';
import { auth } from '../../../auth';
import { redirect } from 'next/navigation';

const page = async({params}) => {
  const status=await auth()
  if(!status){
    redirect('/')
  }
 
    
   const blog=await SingleBlog(params?.id)
    return (
      <section key={blog?.id} className=' min-h-screen'>
      <section className="max-w-4xl mt-20  mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
        <div className='flex justify-between items-center gap-1 my-1'>
           <Link href={`/profile/${blog?.authorId}`} className='flex justify-start items-center gap-2'><Image width={300} height={400} src={blog?.authorImage} className='h-8 w-8 rounded-full border-2'/>
          <p>{blog?.authorName}</p></Link>
               <div className='flex justify-end items-center gap-2'>
               <Link  href={`/update/${params?.id}`}>
               <FaEdit className="w-6 h-6 my-2"/>
              </Link>
             <DeleteBlog blogId={params?.id} authorName={blog.authorName}/>
               </div>
            
        </div>
        
        <Image width={300} height={400} src={blog?.image} alt="imf" className="w-full h-64 object-cover rounded-t-lg" />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
          <p className="text-sm text-gray-600 mt-2">{blog.category}</p>
          <p className="mt-4 text-gray-700">{blog.description}</p>
        </div>
      
      </section>
      
      <AddComent blogId={params?.id}/>
    
      
      </section>
    );
  };
  
  export default page;