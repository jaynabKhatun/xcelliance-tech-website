import useAuth from "./UseAuth";
import useAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseStatus = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();


    const { data: status, isLoading } = useQuery({
        queryKey: ['status '],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure(`/users/status/${user?.email}`);
            console.log('status', data.status);
            return data.status;
        }
    });

    return [status, isLoading];
};

export default UseStatus;