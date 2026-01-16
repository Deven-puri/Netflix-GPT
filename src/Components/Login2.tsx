import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkValidEmailOnly } from "../utils/validate.tsx";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.tsx";
import { BG_URL } from "../utils/constants.tsx";
import { LOGO } from "../utils/constants.tsx";
const Authentication = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const [showPassword, setShowPassword] = useState(false);
	const nameRef = useRef<HTMLInputElement | null>(null);
	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();

	const handleButtonClick = () => {
		const email = emailRef.current?.value ?? "";
		const password = passwordRef.current?.value ?? "";
		const name = nameRef.current?.value ?? "";

		// Validate email
		const emailMessage = checkValidEmailOnly(email);
		if (emailMessage) {
			setError(emailMessage);
			return;
		}

		// Validate password
		if (password.length < 6) {
			setError("Password must be at least 6 characters");
			return;
		}

		// For sign up, validate name
		if (!isSignIn && name.trim().length === 0) {
			setError("Please enter your name");
			return;
		}

		setError(null);

		if (isSignIn) {
			signInWithEmailAndPassword(auth, email, password)
				.then(() => {
					navigate("/browse");
				})
				.catch((error) => {
					setError(error.message);
				});
		} else {
			createUserWithEmailAndPassword(auth, email, password)
				.then(() => {
					navigate("/browse");
				})
				.catch((error) => {
					setError(error.message);
				});
		}
	};

	return (
		<div className="relative min-h-screen w-full text-white bg-black">
			{/* Responsive Netflix Logo Top Left */}
			<div className="absolute top-0 left-0 w-full flex items-start justify-start z-20 p-2 sm:p-4">
				<img
					src={LOGO}
					alt="Netflix logo"
					className="w-24 sm:w-32 md:w-40 object-contain"
				/>
			</div>
			<div className="absolute inset-0">
				<img
					className="h-full w-full object-cover opacity-60"
					src={BG_URL}
					alt="Netflix background"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
			</div>
			<div className="relative z-10 flex min-h-screen items-center justify-center px-4">
				<div className="w-full max-w-sm rounded-md bg-black/80 px-8 py-10 shadow-xl border border-gray-700">
					<h2 className="mb-6 text-2xl font-bold">{isSignIn ? "Sign In" : "Sign Up"}</h2>

					<form
						className="space-y-4"
						onSubmit={(e) => {
							e.preventDefault();
							handleButtonClick();
						}}
					>
						{!isSignIn && (
							<input
								ref={nameRef}
								type="text"
								placeholder="Full Name"
								className="w-full rounded-sm bg-zinc-900 border border-gray-600 px-3 py-2 text-sm outline-none focus:border-white"
							/>
						)}
						<input
							ref={emailRef}
							type="email"
							placeholder="Email Address"
							className="w-full rounded-sm bg-zinc-900 border border-gray-600 px-3 py-2 text-sm outline-none focus:border-white"
						/>
						<div className="relative">
							<input
								ref={passwordRef}
								type={showPassword ? "text" : "password"}
								placeholder="Password"
								className="w-full rounded-sm bg-zinc-900 border border-gray-600 px-3 py-2 pr-10 text-sm outline-none focus:border-white"
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition cursor-pointer"
								aria-label={showPassword ? "Hide password" : "Show password"}
							>
								{showPassword ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
										/>
									</svg>
								)}
							</button>
						</div>
						<button
							type="submit"
							className="w-full rounded-sm bg-red-600 py-2 text-base font-semibold hover:bg-red-700 transition"
						>
							{isSignIn ? "Sign In" : "Sign Up"}
						</button>
					</form>

					{error && <p className="mt-3 text-sm text-red-500">{error}</p>}

					<p className="mt-6 text-sm text-gray-400">
						{isSignIn ? (
							<>
								New to Netflix?{" "}
								<button
									type="button"
									className="text-white font-medium hover:underline"
									onClick={() => setIsSignIn(false)}
								>
									Sign up now
								</button>
							</>
						) : (
							<>
								Already have an account?{" "}
								<button
									type="button"
									className="text-white font-medium hover:underline"
									onClick={() => setIsSignIn(true)}
								>
									Sign in now
								</button>
							</>
						)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Authentication;

