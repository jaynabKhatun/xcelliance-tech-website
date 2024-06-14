
import useAuth from "./UseAuth";
import useAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const UseRole = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();



    const { data: role, isLoading } = useQuery({

        queryKey: ['role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure(`/user/${user?.email}`);
            return data.role;
        }
    })
    return [role, isLoading];

};

export default UseRole;