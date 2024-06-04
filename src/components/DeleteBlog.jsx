'use client'

import { useSession } from "next-auth/react";
import { MdDelete } from "react-icons/md";
import { DeleteB } from '.././app/actions/actions'
const DeleteBlog = ({blogId,authorName}) => {
    const session=useSession();
    
   
  return (
   <section>
    {
              session?.data?.user?.name===authorName &&
               <button onClick={async()=>{


                const isDelete=confirm("Are you sure?");
                if(isDelete){
                    
                    await DeleteB(blogId)
                    
                }
            }} className="text-red-500 hover:text-red-700 mt-2 md:mt-0 flex-shrink-0">
             
                 <MdDelete className="w-6 h-6" />
            
            </button>
            }
   </section>
  )
}

export default DeleteBlog