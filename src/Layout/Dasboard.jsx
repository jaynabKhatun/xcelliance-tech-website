import { FaCartPlus, FaHome, FaOutdent, FaUser } from "react-icons/fa";

import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import UseRole from "../Hooks/UseRole";
import NavlinkMenu from "../Pages/Dashboard/NavlinkMenu/NavlinkMenu";

import GuestMenu from "../Pages/Dashboard/NavlinkMenu/GuestMenu";
import ModaratorMenu from "../Pages/Dashboard/NavlinkMenu/ModaratorMenu";
import AdminMenu from "../Pages/Dashboard/NavlinkMenu/AdminMenu";




const Dasboard = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const [role, isLoading] = UseRole();
    console.log(role, isLoading);


    const handleLogout = () => {
        logOut();
        navigate('/login');

    }
    return (
        <div className="md:flex justify-between ">
            <div className=" p-3 space-y-2 md:w-60 bg-blue-400 text-white font-jost md:min-h-screen  ">
                {/* <div className="flex items-center p-2 space-x-4">
                    <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                    <div>
                        <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                        <span className="flex items-center space-x-1">
                            <Link to={'/dashboard/myProfile'} rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">View profile</Link>
                        </span>
                    </div>
                </div> */}

                {/* user dashboard */}
                <div className="divide-y-4 dark:divide-gray-300 relative justify-between ">

                    <div>
                        {role === 'guest' && < GuestMenu />}
                        {role ==='moderator' && <ModaratorMenu />}
                        {role === 'admin' && < AdminMenu />}

                        {/* <nav className="menu p-4" >


                            <NavlinkMenu label='My Profile' address='/dashboard/myProfile' icon={FaUser}></NavlinkMenu>

                            <NavlinkMenu label=' My Products' address='/dashboard/myProducts' icon={FaCartPlus}></NavlinkMenu>

                            <NavlinkMenu label=' Add Product' address='/dashboard/addProduct' icon={HiViewGridAdd}></NavlinkMenu>


                        </nav> */}
                        {/* <nav className="menu p-4" >


                            <NavlinkMenu label='My Profile' address='/dashboard/myProfile' icon={FaUser}></NavlinkMenu>

                            <NavlinkMenu label=' My Products' address='/dashboard/myProducts' icon={FaCartPlus}></NavlinkMenu>

                            <NavlinkMenu label=' Add Product' address='/dashboard/addProduct' icon={HiViewGridAdd}></NavlinkMenu>


                        </nav> */}
                    </div>




                    {/* shared NavLinks */}

                    <div >
                        <nav  >
                            <NavlinkMenu label=' Home' address='/' icon={FaHome} ></NavlinkMenu>

                            <>
                                <li rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md  hover:bg-gray-300  px-4 py-2 my-1  transition-colors duration-300 transform">
                                    <FaOutdent></FaOutdent>

                                    <NavLink onClick={handleLogout}>Log out</NavLink>



                                </li>
                            </>
                        </nav>
                    </div>
                </div>
            </div>



            {/* dashboard content */}

            <div className="flex-1 border ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dasboard;