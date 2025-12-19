import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.tsx";
import { useEffect } from "react";
import { removeUser, addUser } from "../utils/userSlice.tsx";
import { useDispatch } from "react-redux";
import { LOGO, USER_AVATAR } from "../utils/constants.tsx";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.error("Sign out error:", error);
            });
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
            }
        });
        // unsubscribe when component unmounts
        return () => unsubscribe();
    }, [dispatch, navigate]);

    return (
        <div className="fixed top-0 left-0 right-0 w-full px-8 py-4 bg-gradient-to-b from-black via-black/80 to-transparent z-50 flex justify-between items-center">
            <img
                className="w-32 md:w-40 object-contain"
                src={LOGO}
                alt="Netflix logo"
            />
            <div className="flex items-center gap-4">
                <img 
                    alt="usericon" 
                    src={USER_AVATAR} 
                    className="w-8 h-8 rounded cursor-pointer hover:ring-2 hover:ring-white transition"
                />
                <button 
                    onClick={handleSignOut}
                    className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-700 transition"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Header;