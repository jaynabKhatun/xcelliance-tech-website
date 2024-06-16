import { FaHome, FaOutdent } from "react-icons/fa";

import {  NavLink, Outlet, useNavigate } from "react-router-dom";
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
            

                {/* user dashboard */}
                <div className="divide-y-4 dark:divide-gray-300 relative justify-between ">

                    <div>
                        {role === 'guest' && < GuestMenu />}
                        {role === 'moderator' && <ModaratorMenu />}
                        {role === 'admin' && < AdminMenu />}


                       
                       
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