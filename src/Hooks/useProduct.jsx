import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./UseAxiosCommon";


const useProduct = () => {
    const axiosCommon = useAxiosCommon();
    const { data: products = [], isPending: loading,refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosCommon.get('/products')
            return (res.data)
        }
    })
    return [products, loading,refetch]
};

export default useProduct;