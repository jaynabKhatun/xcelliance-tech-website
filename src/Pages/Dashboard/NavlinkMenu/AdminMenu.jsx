import { FaUserCog,FaUser } from 'react-icons/fa'


import NavlinkMenu from './NavlinkMenu'

const AdminMenu = () => {
    return (
        <>
            <NavlinkMenu icon={FaUser} label='My Profile' address='/dashboard/myProfile' />
            <NavlinkMenu icon={FaUserCog} label='Statistics Page' address='StatisticsPage' />
            <NavlinkMenu icon={FaUserCog} label='Manage Users' address='manageUsers' />
            <NavlinkMenu icon={FaUserCog} label='Manage Coupons' address='manageCupon' />
        </>
    )
}

export default AdminMenu