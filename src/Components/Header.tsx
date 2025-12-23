import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.tsx";
import { useEffect } from "react";
import { removeUser, addUser } from "../utils/userSlice.tsx";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants.tsx";
import { toggleGPTSearchView } from "../utils/gptSlice.tsx";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showGPTSearch = useSelector((state: any) => state.gpt.showGPTSearch);
    
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
                dispatch(removeUser(null));
            }
        });
        // unsubscribe when component unmounts
        return () => unsubscribe();
    }, [dispatch, navigate]);

    const handleLangeuageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: "config/changeLanguage", payload: e.target.value });
    };
    return (
        <div className="fixed top-0 left-0 right-0 w-full px-8 py-4 bg-transparent z-50 flex justify-between items-center">
            <img
                className="w-32 md:w-40 object-contain"
                src={LOGO}
                alt="Netflix logo"
            />
            <div className="flex items-center space-x-4">
                {showGPTSearch && (
                    <select className="bg-black text-white px-1 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600" onChange={handleLangeuageChange}>
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <option key={lang.identifier} value={lang.identifier}>
                                {lang.name}
                            </option>
                        ))}
                    </select>
                )}
                <button
                    className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
                    onClick={() => {
                        if (showGPTSearch) {
                            navigate("/browse");
                            window.location.reload(); 
                        } else {
                            dispatch(toggleGPTSearchView());
                        }
                    }}
                >
                    {showGPTSearch ? "Homepage" : "GPT Search"}
                </button>
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