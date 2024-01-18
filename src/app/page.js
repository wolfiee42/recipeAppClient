"use client"

import ProductShowCase from '@/components/ProductShowCase';
import Link from 'next/link';
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { IoSearch } from "react-icons/io5";



const HomePage = () => {
  const [search, setSearch] = useState();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const searches = form.search.value;
    setSearch(searches)
  }


  return (
    <div className='max-w-7xl mx-auto '>
      {/* navigation bar */}
      <nav className='my-10 flex flex-row justify-between items-center'>
        <div>
          <h1 className='text-3xl font-semibold '>Yum<span className='text-[#7376AB]'>Sync</span></h1>
        </div>
        <div className='flex gap-2 items-center'>
          {/*search bar  */}
          <form onSubmit={handleSubmit} className='flex items-center justify-center gap-2'>
            <input name='search' type="text" className='border-[1px] py-1 px-3 rounded-md' placeholder='Search here...' />
            <button type='submit'><IoSearch className='text-2xl' /></button>
          </form>
          {/* add recipe button */}
          <Link href="/addrecipe" className='hover:bg-[#5b5f97] px-3 py-1 hover:text-white rounded-lg transition delay-100'>Add recipe</Link>
        </div>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </nav>


      {/* recipe showcasing */}
      <div>
        <ProductShowCase search={search} />
      </div>



    </div>
  );
};

export default HomePage;