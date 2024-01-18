"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import useAxios from "./useAxios";
import toast from "react-hot-toast";
import Select from 'react-select'
import { useState } from "react";
import { useRouter } from "next/navigation";

const UpdateRecipe = ({ recipeID }) => {

    const ingredient = [
        { "value": "Flour", "label": "Flour" },
        { "value": "Eggs", "label": "Eggs" },
        { "value": "Milk", "label": "Milk" },
        { "value": "Sugar", "label": "Sugar" },
        { "value": "Butter", "label": "Butter" },
        { "value": "Salt", "label": "Salt" },
        { "value": "Yeast", "label": "Yeast" },
        { "value": "Baking powder", "label": "Baking powder" },
        { "value": "Chocolate chips", "label": "Chocolate chips" },
        { "value": "Vanilla extract", "label": "Vanilla extract" },
        { "value": "Ghee", "label": "Ghee" },
        { "value": "Mustard oil", "label": "Mustard oil" },
        { "value": "Turmeric powder", "label": "Turmeric powder" },
        { "value": "Chili powder", "label": "Chili powder" },
        { "value": "Cumin seeds", "label": "Cumin seeds" },
        { "value": "Coriander seeds", "label": "Coriander seeds" },
        { "value": "Garlic", "label": "Garlic" },
        { "value": "Ginger", "label": "Ginger" },
        { "value": "Onions", "label": "Onions" },
        { "value": "Tomatoes", "label": "Tomatoes" },
        { "value": "Potatoes", "label": "Potatoes" },
        { "value": "Chickpeas", "label": "Chickpeas" },
        { "value": "Lentils", "label": "Lentils" },
        { "value": "Rice", "label": "Rice" },
        { "value": "Fish", "label": "Fish" },
        { "value": "Chicken", "label": "Chicken" },
        { "value": "Beef", "label": "Beef" },
        { "value": "Yogurt", "label": "Yogurt" },
        { "value": "Lime juice", "label": "Lime juice" },
        { "value": "Coconut milk", "label": "Coconut milk" },
        { "value": "Bananas", "label": "Bananas" },
        { "value": "Mangoes", "label": "Mangoes" },
        { "value": "Panch Phoron", "label": "Panch Phoron" },
        { "value": "Bay leaves", "label": "Bay leaves" },
        { "value": "Green chilies", "label": "Green chilies" },
        { "value": "Cilantro", "label": "Cilantro" },
        { "value": "Mint leaves", "label": "Mint leaves" },
        { "value": "Shrimp", "label": "Shrimp" },
        { "value": "Hilsa fish", "label": "Hilsa fish" },
        { "value": "Begun", "label": "Begun" },
        { "value": "Aloo", "label": "Aloo" },
        { "value": "Doi", "label": "Doi" }
    ]

    const axiosCall = useAxios();
    const { register, handleSubmit, reset } = useForm();
    const key = process.env.NEXT_PUBLIC_KEY;
    const imgHostingApi = `https://api.imgbb.com/1/upload?key=${key}`;
    const [selectedOptions, setSelectedOptions] = useState([]);
    const router = useRouter();


    const handleChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
    }

    const onSubmit = async (data) => {
        const recipeName = data.recipeName;
        const ingridients = selectedOptions;
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
        axiosCall.put(`/${recipeID}`, recipe)
            .then(res => {
                
                if (res.data.modifiedCount > 0) {
                    router.push(`/${recipeID}`);
                    toast.success("recipe Updated Successfully.")
                }
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <form className="flex flex-col space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <input  {...register("recipeName")} type="text" placeholder="Recipe Name" className="max-w-full min-h-12 px-5 py-2 rounded-lg border-b-[2px] border-b-[#5B5F97] border-l-4 border-l-[#5B5F97] mt-4" required />
            <Select options={ingredient} value={selectedOptions} onChange={handleChange} isMulti={true} placeholder="Ingredients" className="max-w-[385px] min-h-12 px-5 py-2 rounded-lg border-b-[2px] border-b-[#5B5F97] border-l-4 border-l-[#5B5F97] mt-4" required />
            <textarea {...register("instruction")} placeholder="Intruction" className="max-w-full min-h-12 px-5 py-2 rounded-lg border-b-[2px] border-b-[#5B5F97] border-l-4 border-l-[#5B5F97] mt-4" rows={4} required />
            <input {...register("recipeImage")} type="file" className="max-w-full min-h-12 px-5 py-2 rounded-lg border-b-[2px] border-b-[#5B5F97] border-l-4 border-l-[#5B5F97] mt-4" required />
            <input type="submit" className=" py-3 bg-[#5B5F97] rounded-lg text-white hover:cursor-pointer hover:bg-[#4D5080]" />
        </form>
    );
};

export default UpdateRecipe;