import { Link } from "react-router-dom";

const ManageCupon = () => {
  return (
    <div className="overflow-x-auto ">
    <table className="table-auto w-full bg-white shadow-md rounded-lg">
      {/* head */}
      <thead>
        <tr className="bg-blue-500 text-white">
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Cupon Code</th>
          <th className="px-4 py-2">Delete</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr className="bg-blue-100 hover:bg-blue-200">
          <th className="border px-4 py-2">1</th>
          <td className="border px-4 py-2">Ganderton</td>
          <td className="border px-4 py-2">1211t</td>
          <td className="border px-4 py-2">Blue</td>
        </tr>
       
      </tbody>
    </table>

    <div className="flex justify-end mt-96 p-6   ">
       <Link to={'/Dashboard/addCupon'}> <button className=" bg-blue-500 p-3 hover:bg-slate-400  ">Add Cupon</button></Link>
    </div>
  </div>
  
  );
};

export default ManageCupon;
