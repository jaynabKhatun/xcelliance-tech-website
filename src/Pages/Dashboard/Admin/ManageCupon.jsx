import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaTrash } from "react-icons/fa";

const ManageCupon = () => {
  const axiosSecure = useAxiosSecure();
  const { data: offer = [] } = useQuery({
    queryKey: ["offer"],
    queryFn: async () => {
      const res = await axiosSecure.get("/offer");
      console.log(res.data);

      return res.data;
    },
  });

  return (
    <div className="overflow-x-auto ">
      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        {/* head */}
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className=" px-4 py-2">Serial</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Cupon Code</th>

            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Persentage</th>
            <th className=" px-4 py-2">Delete</th>
          </tr>
        </thead>

        <tbody>
          {/* row 1 */}
          {offer.map((off, ind) => (
            <tr key={off._id} className="bg-blue-100 hover:bg-blue-200 ">
              <th className="border px-4 py-2">{ind + 1}</th>
              <td className="border px-4 py-2">{off.name}</td>
              <td className="border px-4 py-2">{off.CuponCode}</td>
              <td className="border px-4 py-2">{off.date}</td>
              <td className="border px-4 py-2">{off.discount}</td>
              <td className="border px-4 py-2">
                <FaTrash></FaTrash>
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
