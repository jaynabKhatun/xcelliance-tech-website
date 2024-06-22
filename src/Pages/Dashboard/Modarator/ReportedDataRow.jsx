
import propTypes from "prop-types"
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";



const ReportedDataRow = ({ p, refetch }) => {

    const { product, _id } = p;
    const axiosSecure = useAxiosSecure();
  


    const handleDelete = (id) => {
        // console.log(id)
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
   
                const res = await axiosSecure.delete(`/reportedProducts/${id}`)
                // console.log(res)

                if (res.data.deletedCount > 0) {

                    Swal.fire({
                        title: `${product} has been deleted.`,
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch();
                    

                }





            }
        });

    }



    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{product}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <Link to={'/products'}><button className='text-gray-900 btn-ghost whitespace-no-wrap'>Product Details</button></Link>
            </td>


            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button onClick={() => handleDelete(_id)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <FaTrash className="text-2xl"></FaTrash>
                </button>

            </td>
        </tr>
    )
}

ReportedDataRow.propTypes = {
    user: propTypes.object,
    refetch: propTypes.func,
    product: propTypes.object,
    p: propTypes.object,
}


export default ReportedDataRow