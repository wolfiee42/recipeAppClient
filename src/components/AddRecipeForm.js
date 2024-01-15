"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import useAxios from "./useAxios";
import toast from "react-hot-toast";


const AddRecipeForm = () => {

    const axiosCall = useAxios();
    const { register, handleSubmit, reset } = useForm();
    const key = process.env.NEXT_PUBLIC_KEY;
    const imgHostingApi = `https://api.imgbb.com/1/upload?key=${key}`;
    
    const onSubmit = async (data) => {
        const recipeName = data.recipeName;
        const ingridients = data.ingridientName;
        const instruction = data.instruction;
        const imageFile = { image: data.recipeImage[0] };


        // uploading image to imgbb
        const res = await axios.post(imgHostingApi, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        // img url from imgbb
        const recipeImage = res.data.data.display_url;

        const recipe = { recipeName, ingridients, instruction, recipeImage };
        axiosCall.post('/recipes', recipe)
            .then(result => {
                console.log(result.data);
                if(result.data.insertedId){
                   reset(); 
                   toast.success('Congratulation! Recipe have been created.')

                }
                
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <form className="flex flex-col space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <input  {...register("recipeName")} type="text" placeholder="Recipe Name" className="max-w-full min-h-12 px-5 py-2 rounded-lg border-b-[2px] border-b-[#5B5F97] border-l-4 border-l-[#5B5F97] mt-4" required />
            <input {...register("ingridientName")} type="text" placeholder="Ingredients" className="max-w-full min-h-12 px-5 py-2 rounded-lg border-b-[2px] border-b-[#5B5F97] border-l-4 border-l-[#5B5F97] mt-4" required />
            <textarea {...register("instruction")} placeholder="Intruction" className="max-w-full min-h-12 px-5 py-2 rounded-lg border-b-[2px] border-b-[#5B5F97] border-l-4 border-l-[#5B5F97] mt-4" rows={4} required />
            <input {...register("recipeImage")} type="file" className="max-w-full min-h-12 px-5 py-2 rounded-lg border-b-[2px] border-b-[#5B5F97] border-l-4 border-l-[#5B5F97] mt-4" required />
            <input type="submit" className=" py-3 bg-[#5B5F97] rounded-lg text-white hover:cursor-pointer hover:bg-[#4D5080]" />
        </form>
    );
};

export default AddRecipeForm;