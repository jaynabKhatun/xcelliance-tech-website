import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosCommon from "../../Hooks/UseAxiosCommon";
import { Timestamp } from "firebase/firestore";

const SocialLogin = () => {
    const axiosCommon = useAxiosCommon();
    const { signInWithGoogle } = useAuth();
    const navigate = useNavigate();


    const location = useLocation();

    const handleGoogleSignIn = () => {
        signInWithGoogle()

            .then(res => {
                console.log(res);

                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                    role: 'guest',
                    status: 'verified',
                    Timestamp: Date.now(),
                }
                console.log(userInfo);

                axiosCommon.put('/user', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate(location.state || '/')
                        toast.success('Login Successfull')


                    })


            })
            .catch(err => {
                console.log(err)
            })
    };

    return (
        <div onClick={handleGoogleSignIn} className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <div className="px-4 py-2">
                <FcGoogle className='text-2xl'></FcGoogle>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
        </div>
    );
};

export default SocialLogin;