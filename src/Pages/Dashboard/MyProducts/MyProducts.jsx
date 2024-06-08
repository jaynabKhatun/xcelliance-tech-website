import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hooks/UseAxiosCommon";
import useAuth from "../../../Hooks/UseAuth";

import ProducTable from "./ProducTable";
import Swal from "sweetalert2";

const MyProducts = () => {
    const axiosCommon = useAxiosCommon();
    const { user } = useAuth();
    console.log(user)
    const { data: myProduct = [], refetch } = useQuery({

        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await axiosCommon.get(`/product?email=${user?.email}`)
            console.log(res.data)
            return res.data;
        }
    })
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosCommon.delete(`/products/${id}`)
                console.log(res)

                if (res.data.deletedCount > 0) {

                    Swal.fire({
                        title: `${name} has been deleted.`,
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch();

                }





            }
        });

    }




    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                    </colgroup>
                    <thead className="bg-blue-400">
                        <tr className="text-left">
                            <th className="p-3"> No</th>
                            <th className="p-3">Product Name
                            </th>
                            <th className="p-3">Number of votes
                            </th>
                            <th className="p-3">Update Button
                            </th>
                            <th className="p-3 ">Delete Button
                            </th>
                            <th className="p-3 ">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProduct.map((table, index) => <ProducTable key={index}
                                handleDelete={handleDelete}
                                table={table}
                                index={index}
                            ></ProducTable>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;