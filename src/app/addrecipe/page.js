import Image from "next/image";
import addrecipe from "../../assests/undraw_barbecue_3x93.svg"
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
const AddNewRecipe = () => {

    return (
        <div className="max-w-7xl mx-auto my-20" >
            <Link href="/"> <FaArrowLeft className="text-3xl text-[#5B5F97]" /></Link>
            <h1 className="text-4xl font-semibold text-center">Add a Recipe</h1>
            <div className="flex justify-center items-center gap-10">
                <Image src={addrecipe} width={500} />
                <form className="flex flex-col space-y-3">
                    <input type="text" placeholder="Recipe Name" className="max-w-full min-h-12 px-5 py-2 rounded-lg border-b-[2px] border-b-[#5B5F97] border-l-4 border-l-[#5B5F97] mt-4" required />
                    <input type="text" placeholder="Ingredients" className="max-w-full min-h-12 px-5 py-2 rounded-lg border-b-[2px] border-b-[#5B5F97] border-l-4 border-l-[#5B5F97] mt-4" required />
                    <textarea placeholder="Intruction" className="max-w-full min-h-12 px-5 py-2 rounded-lg border-b-[2px] border-b-[#5B5F97] border-l-4 border-l-[#5B5F97] mt-4" required></textarea>
                    <input type="file" className="max-w-full min-h-12 px-5 py-2 rounded-lg border-b-[2px] border-b-[#5B5F97] border-l-4 border-l-[#5B5F97] mt-4" required />
                    <input type="submit" className=" py-3 bg-[#5B5F97] rounded-lg text-white hover:cursor-pointer hover:bg-[#4D5080]" />
                </form>
            </div>
        </div>
    );
};

export default AddNewRecipe;