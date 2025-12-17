import Header from "./Header.tsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="relative h-screen w-full text-white bg-black">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    className="h-full w-full object-cover opacity-60"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_large.jpg"
                    alt="Netflix background"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
            </div>
            <Header />
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
                            navigate("/login");
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full md:w-96 rounded-sm bg-black/60 border border-gray-500 px-4 py-3 text-sm md:text-base outline-none focus:border-white"
                        />
                        <button
                            type="submit"
                            className="whitespace-nowrap rounded-sm bg-red-600 px-6 py-3 text-lg font-semibold hover:bg-red-700 transition"
                        >
                            Get Started
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;