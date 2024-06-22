
import { createContext, useEffect, useState } from 'react'

import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth'



import app from '../Firebase/FirebaseConfig'
import useAxiosCommon from '../Hooks/UseAxiosCommon';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosCommon = useAxiosCommon();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }


    // Get token from server




    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            //token create

            if (currentUser) {
                const userInfo = {
                    email: currentUser.email
                }
                axiosCommon.post('/jwt', userInfo)
                    .then(res => {

                        console.log(res.data)

                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)

                        }
                    })

            } else {
                localStorage.removeItem('access-token')

            }


            // console.log('CurrentUser-->', currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider