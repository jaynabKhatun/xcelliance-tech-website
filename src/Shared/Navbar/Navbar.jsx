
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../src/assets/logo/Logo_Xcelliance_2.png'
import useAuth from '../../Hooks/UseAuth';
const Navbar = () => {

    const { user, logOut, } = useAuth();

    const handleLogOut = () => {
        logOut();
    }


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
                            fontWeight: isActive ? "700" : "500",
                            textDecoration: isActive ? "underline" : "none",

                        };
                    }}

                >Home</NavLink>
                
                <NavLink title='show all product' to={'/products'}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "white",
                            fontWeight: isActive ? "700" : "500",
                            textDecoration: isActive ? "underline" : "none",

                        };
                    }}
                >Product</NavLink>


                {
                    !user && <NavLink to={'/login'}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "white",
                                fontWeight: isActive ? "700" : "500",
                                textDecoration: isActive ? "underline" : "none",

                            };
                        }}
                    >Log in</NavLink>
                }


            </div>




            {
                user && <div className="dropdown dropdown-end">
                    <div title={user?.displayName} tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                referrerPolicy='no-referrer'
                                alt='User Profile Photo'
                                src={user?.photoURL}
                            />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                {
                                    user?.displayName ? user?.displayName : user?.email.split('@')[0]
                                }
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><Link>Dashboard</Link></li>
                        <li onClick={handleLogOut}><Link>Logout</Link></li>
                    </ul>
                </div>
            }
        </div>

    );
};

export default Navbar;