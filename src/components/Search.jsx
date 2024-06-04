'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"


import { MdSearch } from "react-icons/md";
const Search = () => {

    const searchParams = useSearchParams();

    const pathName = usePathname(); 

    const { replace } = useRouter();

    const handleSearch = (query) => {
    
        const params = new URLSearchParams(searchParams);

        if (query) {
            params.set('query', query);
        } else {
            params.delete('query');
        }

        replace(`${pathName}?${params.toString()}`) 

    }
  return (
    <section className='w-full  sticky max-sm:mb-3  top-0 left-0 z-[22]'>
  <MdSearch className="w-8   text-slate-600 top-4 max-sm:top-7 max-sm:left-4 left-[2%] absolute   h-8"/>
        <input type="text" onChange={(e)=>{
            if(e!=''){
                handleSearch(e.target.value)
            }
        }}  placeholder='Search Something' className='w-full text-lg  max-sm:pt-5 text-slate-900 my-2 outline-none px-16 py-2 rounded-md  shadow-xl'/>
    </section>
  )
}

export default Search