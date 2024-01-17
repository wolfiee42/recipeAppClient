"use client"

import { MdOutlineDelete } from "react-icons/md";
import useAxios from "./useAxios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const DeleteBtn = (params) => {

    const axiosCall = useAxios();
    const router = useRouter();
    const handleDeleteBtn = () => {
        axiosCall.delete(`/${params.id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast.error("Recipe has been deleted.")
                    router.push('/');
                }
            })
    }
    return (
        <div>
            <button onClick={handleDeleteBtn} className="bg-[#404063] text-white rounded-xl px-5 py-2 transition hover:bg-red-500 uppercase flex items-center justify-center gap-1">delete <MdOutlineDelete className="text-xl" /></button>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default DeleteBtn;