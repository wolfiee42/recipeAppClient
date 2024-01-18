import axios from "axios";

const axiosCall = axios.create({
    baseURL: "https://recipe-next-server-six.vercel.app/",
})
const useAxios = () => {
    return axiosCall;
};

export default useAxios;