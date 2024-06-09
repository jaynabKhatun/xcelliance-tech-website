import { FaEdit, FaTrash } from "react-icons/fa";
import propTypes from "prop-types";
import { Link } from "react-router-dom";




const ProducTable = ({ table, index, handleDelete }) => {




    const { name, _id } = table;



    return (
        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
            <td className="p-3">
                <p>{index + 1}</p>
            </td>
            <td className="p-3">
                <p>{name}</p>
            </td>
            <td className="p-3">
                <p>14 Jan 2022</p>

            </td>
            <td className="p-3">

                <Link to={`/dashboard/updateItem/${_id}`} className="dark:text-gray-600 text-2xl"><FaEdit></FaEdit></Link>
            </td>


            <td onClick={() => handleDelete(_id)} className="p-3  ">
                <p className="text-2xl"><FaTrash></FaTrash></p>
            </td>
            <td className="p-3 ">
                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <span>Pending</span>
                </span>
            </td>
        </tr>
    );
};

ProducTable.propTypes = {
    table: propTypes.object.isRequired,
    index: propTypes.number.isRequired,
    handleDelete: propTypes.func.isRequired,
};


export default ProducTable;