import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.tsx";

const Header = () => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.error("Sign out error:", error);
            });
    };

    return (
        <div className="fixed top-0 left-0 right-0 w-full px-8 py-4 bg-gradient-to-b from-black via-black/80 to-transparent z-50 flex justify-between items-center">
            <img
                className="w-32 md:w-40 object-contain"
                src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png"
                alt="Netflix logo"
            />
            <div className="flex items-center gap-4">
                <img 
                    alt="usericon" 
                    src="https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" 
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