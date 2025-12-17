import Header from "./Header.tsx";

const Authentication = () => {
	return (
		<div className="relative min-h-screen w-full text-white bg-black">
			{/* Background image + gradient */}
			<div className="absolute inset-0">
				<img
					className="h-full w-full object-cover opacity-60"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_large.jpg"
					alt="Netflix background"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
			</div>

			{/* Logo header */}
			<Header />

			{/* Centered sign-in card */}
			<div className="relative z-10 flex min-h-screen items-center justify-center px-4">
				<div className="w-full max-w-sm rounded-md bg-black/80 px-8 py-10 shadow-xl border border-gray-700">
					<h2 className="mb-6 text-2xl font-bold">Sign In</h2>

					<div className="space-y-4">
						<input
							type="text"
							placeholder="Username"
							className="w-full rounded-sm bg-zinc-900 border border-gray-600 px-3 py-2 text-sm outline-none focus:border-white"
						/>
						<input
							type="password"
							placeholder="Password"
							className="w-full rounded-sm bg-zinc-900 border border-gray-600 px-3 py-2 text-sm outline-none focus:border-white"
						/>
						<button
							type="button"
							className="w-full rounded-sm bg-red-600 py-2 text-base font-semibold hover:bg-red-700 transition"
						>
							Sign In
						</button>
					</div>

					<p className="mt-6 text-sm text-gray-400">
						New to Netflix? <button className="text-white font-medium hover:underline">Sign up now</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Authentication;

