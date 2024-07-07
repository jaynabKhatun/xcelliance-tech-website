import useAuth from "./UseAuth";
import useAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UsePrice = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();


    const { data: price, isLoading } = useQuery({
        queryKey: ['price'],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure(`/users/price/${user?.email}`);
            console.log('price', data.price);
            return data.price;
        }
    });

    return [price, isLoading];
};

export default UsePrice;
