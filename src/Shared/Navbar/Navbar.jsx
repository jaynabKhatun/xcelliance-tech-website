
import { NavLink } from 'react-router-dom';
import logo from '../../../src/assets/logo/Logo_Xcelliance_2.png'
import { useContext } from 'react';
import { AuthContext } from '../../Authprovider/AuthProvider';
const Navbar = () => {

    const { user } = useContext(AuthContext);
    return (
        <div className="navbar  shadow-2xl  fixed z-10 max-w-screen-xl mx-auto">
            <div className="flex-1">
                <img className=' w-52' src={logo} alt="" />

            </div>



            <div className="flex-none gap-4 mr-6">

                <NavLink
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "white",
                            fontWeight: isActive ? "900" : "500",
                            textDecoration: isActive ? "underline" : "none",

                        };
                    }}

                >Home</NavLink>
                <NavLink to={'/products'}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "white",
                            fontWeight: isActive ? "900" : "500",
                            textDecoration: isActive ? "underline" : "none",

                        };
                    }}
                >Product</NavLink>
                {
                    !user && <NavLink to={'/login'}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "white",
                                fontWeight: isActive ? "900" : "500",
                                textDecoration: isActive ? "underline" : "none",

                            };
                        }}
                    >Log in</NavLink>
                }


            </div>




            {
                user && <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            }
        </div>

    );
};

export default Navbar;