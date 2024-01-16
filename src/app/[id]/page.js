"use client"

import useAxios from "@/components/useAxios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";


const IndivitualRecipe = ({ params }) => {
    const recipeID = params.id;
    const axiosCall = useAxios();
    const [recipe, setRecipe] = useState();
    const [materials, setMaterial] = useState([]);
    useEffect(() => {
        axiosCall.get(`/${recipeID}`)
            .then(res => {
                setRecipe(res.data);
                setMaterial(res.data.ingridients)
            })
    }, []);
    return (
        <div className="max-w-7xl mx-auto my-40">
             <Link href="/"> <FaArrowLeft className="text-3xl text-[#4D5080] my-5" /></Link>
            <div className="flex flex-row justify-center">
                <div>
                    <Image src={recipe?.recipeImage} width={500} height={500} />
                </div>
                <div className="bg-[#b8b8d1] max-w-[500px] p-5 flex flex-col">
                    <h3 className="text-3xl font-semibold mb-2">{recipe?.recipeName}</h3>
                    <p className="text-sm"> <span className="font-semibold">Instruction: </span> {recipe?.instruction}</p>
                    <p className="mt-4 mb-1">Ingridients:</p>
                    <div className="flex flex-wrap mb-5 gap-2">
                        {
                            materials.map(item =>
                                <p className="border-2 gap-1 max-w-fit text-xs p-3 rounded-2xl shadow-xl">{item?.value}</p>
                            )
                        }
                    </div>
                    <p className="flex-grow"></p>
                    <div className="flex flex-row gap-2">
                        <button className="bg-[#404063] text-white rounded-xl px-5 py-2 transition hover:bg-red-500 uppercase flex items-center justify-center gap-1">delete <MdOutlineDelete className="text-xl" /></button>
                        <button className="bg-[#404063] text-white rounded-xl px-5 py-2 transition hover:bg-green-500 uppercase flex items-center justify-center gap-1">update <FaEdit /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndivitualRecipe;