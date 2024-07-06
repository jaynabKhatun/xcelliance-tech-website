import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageCupon = () => {
  const axiosSecure = useAxiosSecure();
  const { data: cupon = [], refetch } = useQuery({
    queryKey: ["cupon"],
    queryFn: async () => {
      const res = await axiosSecure.get("/cupon");
      // console.log(res.data);

      return res.data;
    },
  });

  const handleDelete = async (id) => {
    console.log(id);
    //delete from db
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/cupon/${id}`);
        // console.log(res)

        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: `has been deleted.`,
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto ">
      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        {/* head */}
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className=" px-4 py-2">Serial</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Cupon Code</th>
            <th className="px-4 py-2">View</th>
            <th className="px-4 py-2">edit</th>
            <th className=" px-4 py-2">Delete</th>
          </tr>
        </thead>

        <tbody>
          {/* row 1 */}
          {cupon.map((off, ind) => (
            <tr key={off._id} className="bg-blue-100 hover:bg-blue-200 ">
              <th className="border px-4 py-2">{ind + 1}</th>
              <td className="border px-4 py-2">{off.name}</td>
              <td className="border px-4 py-2">{off.CuponCode}</td>
              <td className="border px-4 py-2">
                <button className="btn-outline btn-xs">view</button>
              </td>
              <td className="border px-4 py-2">
              <Link to={`/dashboard/editCupon/${off._id}`}>
                  <button>
                    <FaEdit></FaEdit>
                  </button>
                </Link>
              </td>
              <td className="border px-4 py-2">
                <button onClick={() => handleDelete(off._id)}>
                  <FaTrash></FaTrash>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-96 p-6   ">
        <Link to={"/Dashboard/addCupon"}>
          <button className=" bg-blue-500 p-3 hover:bg-slate-400  ">
            Add Cupon
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManageCupon;
