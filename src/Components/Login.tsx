import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkValidEmailOnly } from "../utils/validate.tsx";
import { BG_URL, LOGO } from "../utils/constants.tsx";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);

    return (
        <div className="relative h-screen w-full text-white bg-black">
            <div className="absolute inset-0">
                <img
                    className="h-full w-full object-cover opacity-60"
                    src={BG_URL}
                    alt="Netflix background"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
            </div>
            {/* Responsive Netflix Logo Top Left */}
            <div className="absolute top-0 left-0 w-full flex items-start justify-start z-20 p-2 sm:p-4">
                <img
                    src={LOGO}
                    alt="Netflix logo"
                    className="w-24 sm:w-32 md:w-40 object-contain"
                />
            </div>
            <div className="relative z-10 flex h-full items-center justify-center px-4">
                <div className="max-w-3xl text-center space-y-4">
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                        Unlimited movies, shows, and more
                    </h1>
                    <p className="text-lg md:text-2xl font-medium">
                        Starts at ₹149. Cancel at any time.
                    </p>
                    <p className="text-sm md:text-base">
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>

                    <form
                        className="mt-4 flex flex-col md:flex-row items-center gap-3 md:gap-2 justify-center"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const message = checkValidEmailOnly(email);
                            if (message) {
                                setError(message);
                                return;
                            }
                            setError(null);
                            navigate("/login");
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full md:w-96 rounded-sm bg-black/60 border border-gray-500 px-4 py-3 text-sm md:text-base outline-none focus:border-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="whitespace-nowrap rounded-sm bg-red-600 px-6 py-3 text-lg font-semibold hover:bg-red-700 transition"
                        >
                            Get Started
                        </button>
                    </form>
                    {error && (
                        <p className="mt-3 text-sm text-red-500">{error}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;