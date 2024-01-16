"use client"

import React, { useEffect, useState } from 'react';
import useAxios from './useAxios';
import Image from 'next/image';


const ProductShowCase = () => {
    const axiosCall = useAxios();
    const [allrecipe, setAllRecipe] = useState();
    useEffect(() => {
        axiosCall.get("/allrecipes")
            .then(result => {
                setAllRecipe(result.data);
            });
    }, []);
    return (
        <div className='grid grid-cols-3 gap-5'>
            {allrecipe && allrecipe.map(recipe =>
                <div key={recipe._id} className='flex justify-center items-center flex-col bg-[#b8b8d1] rounded-md'>
                    <Image src={recipe.recipeImage} width={300} height={300} alt={`${recipe.recipeName}'s Picture`} className='rounded-xl m-5' />
                    <h3 className='text-xl mb-3 font-medium'>{recipe.recipeName}</h3>
                </div>
            )}
        </div>
    );
};

export default ProductShowCase;