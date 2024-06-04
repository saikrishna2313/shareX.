'use client'
import { MdDelete } from "react-icons/md";
import { DeleteComment } from "../actions/actions";
import { useSession } from "next-auth/react";

const CommentList = ({ comments,getCommnets }) => {
  const session=useSession();
  return (
    <section className="max-w-4xl mx-auto py-5 px-4 shadow-lg bg-white rounded-md">
      <h1 className="text-2xl font-semibold mb-5">All Comments: {comments.length}</h1>
      {
        comments.map((cmt, index) => (
          <div key={index} className="flex flex-col md:flex-col  shadow-md py-3 px-4 mb-3 gap-3 bg-gray-50 rounded-md">
              <div className='flex justify-start items-center gap-1 my-1 py-1'>
           <img src={cmt?.authorImage} className='h-6 w-6 rounded-full border-2'/>
          <p>{cmt?.authorName}</p>
        </div>
            <section className="flex px-3 items-center gap-3">
           
            <p className="text-gray-700 flex-grow break-words w-full md:w-auto">{cmt?.text}</p>
            
            {
              session?.data?.user?.name===cmt?.authorName && <button onClick={async()=>{


                const isDelete=confirm("Are you sure?");
                if(isDelete){
                    await DeleteComment(cmt?.id)
                    getCommnets()
                }
            }} className="text-red-500 hover:text-red-700 mt-2 md:mt-0 flex-shrink-0">
             
                 <MdDelete className="w-6 h-6" />
            
            </button>
            }
            
            </section>
          </div>
        ))
      }
    </section>
  );
}

export default CommentList;
