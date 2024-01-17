import ProductShowCase from '@/components/ProductShowCase';
import Link from 'next/link';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const HomePage = () => {
  return (
    <div className='max-w-7xl mx-auto '>
      {/* navigation bar */}
      <nav className='my-10 flex flex-row justify-between items-center'>
        <div>
          <h1 className='text-3xl font-semibold '>Yum<span className='text-[#7376AB]'>Sync</span></h1>
        </div>
        <div className='flex gap-2 items-center'>
          <input type="text" className='border-[1px] py-1 px-3 rounded-md' placeholder='Search here...' />
          <Link href="/addrecipe" className='hover:bg-[#5b5f97] px-3 py-1 hover:text-white rounded-lg transition delay-100'>Add recipe</Link>
        </div>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </nav>


      {/* recipe showcasing */}
      <div>
        <ProductShowCase />
      </div>



    </div>
  );
};

export default HomePage;