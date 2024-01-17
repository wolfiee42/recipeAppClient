import UpdateRecipe from "@/components/UpdateRecipe";
import Image from "next/image";
import updateimg from "../../../assests/update.svg"
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";




const Updaterecipe = ({ params }) => {

    return (
        <div className="max-w-7xl mx-auto my-20">
            <Link href={`/${params.id}`}> <FaArrowLeft className="text-3xl text-[#4D5080]" /></Link>
            <h1 className="text-4xl font-semibold text-center">Update <span className="text-[#5B5F97]">Recipe</span></h1>
            <div className="flex justify-center items-center gap-10 mt-16">
                <Image src={updateimg} width={500} height={465} alt="Update Image" />
                <UpdateRecipe recipeID={params.id} />
            </div>
        </div>

    );
};

export default Updaterecipe;