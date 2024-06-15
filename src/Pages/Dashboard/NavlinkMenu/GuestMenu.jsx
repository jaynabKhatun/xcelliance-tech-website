import { FaCartPlus, FaHome, FaOutdent, FaUser } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import NavlinkMenu from './NavlinkMenu'
const GuestMenu = () => {
    return (
        <>
            <NavlinkMenu icon={FaUser} label='My Profile' address='/dashboard/myProfile' />
            <NavlinkMenu icon={FaCartPlus} label='My Products' address='/dashboard/myProducts' />
            <NavlinkMenu icon={HiViewGridAdd} label='Add products' address='/dashboard/addProduct' />


        </>
    )
}

export default GuestMenu