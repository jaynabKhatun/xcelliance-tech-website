

import login from '../../../src/assets/login/login.png'
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/AuthProvider';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
    const navigate = useNavigate();

    const { signIn,
        signInWithGoogle } = useContext(AuthContext);


    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle()
            toast.success('Login Successfull')
        }
        catch (error) {
            console.log(error)
            toast.error(error.message)

        }
        navigate('/')


    }


    //email pasword sign in

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user);


        //create user in firebase auth
        signIn(email, password)
            .then(res => {
                console.log(res)
                toast.success('Login Successfull')
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                toast.error(err.message)
            })





    }







    return (
        <div>
            <div className="flex my-12 w-full max-w-sm mx-auto min-h-[calc(100vh-100px)] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                <Helmet>
                    <title>
                        Login Page || Xcelliance
                    </title>
                </Helmet>
                <div className="hidden bg-cover  lg:block lg:w-1/2 " style={{
                    backgroundImage: `url(${login})`,
                }}>


                </div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <img src="" alt="" />
                    </div>

                    <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                        Welcome back!
                    </p>

                    <div onClick={handleGoogleSignIn} className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <div className="px-4 py-2">
                            <FcGoogle className='text-2xl'></FcGoogle>
                        </div>

                        <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                    </div>

                    <div nonce="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                        <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login
                            with email</a>

                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>


                    <form onSubmit={handleLogin}>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Email Address</label>
                            <input name='email' id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Password</label>
                                <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                            </div>

                            <input id="loggingPassword" name='password' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                        </div>


                        <div className='mt-6'>
                            <input className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" type="submit" value="Sign In" />

                        </div>
                    </form>



                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                        <Link to={'/register'} href="#" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</Link>

                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>


        </div>
    );

}
export default LoginPage;