import registerp from '../../assets/login/register.png'
import { Link, useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';

import useAuth from '../../Hooks/UseAuth';
import toast from 'react-hot-toast';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAxiosCommon from '../../Hooks/UseAxiosCommon';


const Registerpage = () => {

    const { createUser, updateUserProfile } = useAuth();
    const axiosCommon = useAxiosCommon();

    const navigate = useNavigate();

    //react hook form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log("form data hre", data);
        createUser(data.email, data.password)
            .then(res => {
                const loggedUder = res.user;
                console.log(loggedUder);

                //update the user
                updateUserProfile(data?.name, data.photoUrl)

                    .then(res => {
                        console.log(res)

                        //use info send  to the database
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            price: '500',
                            role: 'guest',
                            status: 'verified',
                        }
                        

                        axiosCommon.put('/user', userInfo)
                            .then(res => {
                                console.log(res.data)
                                if (res.data.upsertedCount) {
                                    toast.success('User Created Successfully')
                                    navigate('/')
                                }
                            })


                    })
                    .catch(err => {

                        toast.error(err.message)
                    })

            })

    };

    return (
        <>
            <Helmet>
                <title>
                    Register|| Xcelliance
                </title>
            </Helmet>
            <div className="flex my-12 w-full max-w-sm mx-auto min-h-[calc(100vh-100px)] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">

                <div className="hidden bg-cover  lg:block lg:w-1/2 " style={{
                    backgroundImage: `url(${registerp})`,
                }}>


                </div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <img src="" alt="" />
                    </div>

                    <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                        Welcome back!
                    </p>

                    <SocialLogin></SocialLogin>

                    <div nonce="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                        <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login
                            with email</a>

                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Name</label>
                            <input  {...register("name", { required: true })} id="name" name='name' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}

                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Email Address</label>
                            <input {...register("email", { required: true })} id="LoggingEmailAddress" name='email' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Password</label>
                                <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                            </div>

                            <input {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,

                            })} id="loggingPassword" name='password' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />

                            {errors.password?.type === ' required' && <p className='text-red-600' role="alert">password at least 6 charecter</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert">password at least 6 charecter</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-600' role="alert">password less then 20 charecter</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600' role="alert">The password must be 6-20 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character (@, $, !, %, *, ?, &).</p>}
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Photo URL</label>

                            </div>

                            <input {...register("photoUrl")} id="photoUrl" name='photoUrl' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />

                        </div>

                        <div className='mt-6'>
                            <input className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" type="submit" value="Sign Up" />

                        </div>

                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                        <Link to={'/login'} href="#" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign in</Link>

                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Registerpage;