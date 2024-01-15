import Image from "next/image";
import addrecipe from "../../assests/undraw_barbecue_3x93.svg"
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import AddRecipeForm from "@/components/AddRecipeForm";
import { Toaster } from "react-hot-toast";



const AddNewRecipe = () => {
    return (
        <div className="max-w-7xl mx-auto my-20" >
            <Link href="/"> <FaArrowLeft className="text-3xl text-[#4D5080]" /></Link>
            <h1 className="text-4xl font-semibold text-center">Add a <span className="text-[#5B5F97]">Recipe</span></h1>
            <div className="flex justify-center items-center gap-10 mt-16">
                <Image src={addrecipe} width={500} height={465} alt="Cooking Image" />
                <AddRecipeForm />
            </div>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default AddNewRecipe;