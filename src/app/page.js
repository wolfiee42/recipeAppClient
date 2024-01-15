import Link from 'next/link';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const HomePage = () => {
  return (
    <div className='max-w-7xl mx-auto my-3 flex flex-row justify-between items-center'>
      <div>
        <h1 className='text-3xl font-semibold '>Yum<span className='text-[#7376AB]'>Sync</span></h1>
      </div>
      <div className='flex gap-2 items-center'>
        <input type="text" className='border-[1px] py-1 px-3 rounded-md' placeholder='Search here...' />
        <Link href="/addrecipe">Add recipe</Link>
      </div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </div>
  );
};

export default HomePage;