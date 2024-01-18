"use client"

import React, { useEffect, useState } from 'react';
import useAxios from './useAxios';
import Image from 'next/image';
import Link from 'next/link';


const ProductShowCase = ({ search }) => {
    const axiosCall = useAxios();
    const [allrecipe, setAllRecipe] = useState();
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          let result;
          if (search) {
            result = await axiosCall.get(`/allrecipes?search=${search}`);
          } else {
            result = await axiosCall.get(`/allrecipes`);
          }
          setAllRecipe(result.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, [search]); // 

    return (
        <div className='grid grid-cols-3 gap-5'>
            {allrecipe && allrecipe.map(recipe =>
                <Link href={recipe._id} key={recipe._id} className='flex justify-center items-center flex-col bg-[#CECEDF] rounded-md hover:shadow-2xl hover:bg-[#B5B5CF] transition'>
                    <Image src={recipe.recipeImage} width={300} height={300} alt={`${recipe.recipeName}'s Picture`} className='rounded-xl m-5' />
                    <h3 className='text-xl mb-3 font-medium'>{recipe.recipeName}</h3>
                </Link>
            )}
        </div>
    );
};

export default ProductShowCase;