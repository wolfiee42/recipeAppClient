"use client"

import React, { useEffect, useState } from 'react';
import useAxios from './useAxios';
import Image from 'next/image';
import Link from 'next/link';


const ProductShowCase = ({ search }) => {
    const axiosCall = useAxios();
    const [allrecipe, setAllRecipe] = useState();
    if (search) {
        useEffect(() => {
            axiosCall.get(`/allrecipes?search=${search}`)
                .then(result => {
                    setAllRecipe(result.data);
                });
        }, [search]);
    } else {
        useEffect(() => {
            axiosCall.get(`/allrecipes`)
                .then(result => {
                    setAllRecipe(result.data);
                });
        }, []);
    }


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