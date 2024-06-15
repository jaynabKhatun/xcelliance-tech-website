
import propTypes from "prop-types"
import { useState } from "react";
import UpdateUserModal from "../../../../components/Modal/UpdateUserModal";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAuth from "../../../../Hooks/UseAuth";

const UserDataRow = ({ user, refetch }) => {

    const [isOpen, setIsEditModalOpen] = useState(false);
    const { user: loggedInUser } = useAuth();

    const axiosSecure = useAxiosSecure();

    const { mutateAsync } = useMutation({
        mutationFn: async users => {
            const { data } = await axiosSecure.patch(
                `/users/update/${user?.email}`
                , users)
            // console.log(data)
            return data
        },

        onSuccess: data => {
            refetch();
            // console.log(data)
            toast.success('User role Updated Successfully')
            setIsEditModalOpen(false);


        }

    })




    //modal handler
    const modalHandler = async (selected) => {

        if (loggedInUser.email === user.email) {
            toast.error('You cannot update your own role')
            return
        }
        // console.log('modal updated', selected);
        const role = {
            role: selected,
            status: 'Verified',


        }

        try {
            await mutateAsync(role)

        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }




    }

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {user?.status ? (
                    <p
                        className={`${user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
                            } whitespace-no-wrap`}
                    >
                        {user.status}
                    </p>
                ) : (
                    <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
                )}
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button onClick={() => setIsEditModalOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Update Role</span>
                </button>
                {/* Modal */}
                <UpdateUserModal isOpen={isOpen}
                    setIsEditModalOpen={setIsEditModalOpen}
                    modalHandler={modalHandler}
                    user={user} />
            </td>
        </tr>
    )
}
UserDataRow.propTypes = {
    user: propTypes.object.isRequired,
    refetch: propTypes.func.isRequired,
}

export default UserDataRow