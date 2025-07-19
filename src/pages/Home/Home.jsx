// Minor edit to preserve GitHub commit streak
// import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../theme/ThemeContext";
// import daniotMihrete from "../../assets/daniotMihrete.HEIC";
import "./Home.css";

function Home() {
	// const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white font-inter relative overflow-hidden">
			{/* Background decorative elements - More subtle */}
			<div className="absolute inset-0">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-500/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
				<div
					className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-500/10 to-red-600/10 rounded-full blur-3xl animate-float"
					style={{ animationDelay: "2s" }}
				></div>
				<div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float"
					style={{ animationDelay: "1s" }}
				></div>
			</div>

			{/* Main content */}
			<div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-16">
				<div className="max-w-5xl mx-auto text-center">
					{/* Profile Photo - Updated with actual image */}
					<div className="mb-16 flex justify-center">
						<div className="relative group">
							<div className="w-40 h-40 rounded-full bg-gradient-to-r from-rose-400 via-purple-500 to-orange-400 p-1 animate-glow">
								<div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
									<img
										src={"daniotMihrete"}
										alt="Daniot Mihrete"
										className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
									/>
								</div>
							</div>
							<div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400/20 via-purple-500/20 to-orange-400/20 blur-xl animate-pulse"></div>
						</div>
					</div>

					{/* Name and Title */}
					<div className="mb-8">
						<h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight font-poppins">
							<span className="gradient-text">Daniot Mihrete</span>
							{/* <br /> */}
							{/* <span className="text-white">Mihrete</span> */}
						</h1>
						<h2 className="text-2xl md:text-3xl text-slate-300 font-medium font-inter">
							Creative Developer & Problem Solver
						</h2>
					</div>

					{/* Bio - More concise */}
					<p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed font-inter">
						I craft digital experiences that bridge the gap between logic and creativity. 
						Every line of code tells a story, every pixel serves a purpose. 
						Passionate about building solutions that matter and make a difference.
					</p>

					{/* Call-to-Action Buttons - Enhanced styling */}
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
						<Link
							to="/projects"
							className="btn-primary px-10 py-4 rounded-full font-semibold text-lg font-poppins inline-block transform transition-all duration-300 hover:scale-105"
						>
							View My Work
						</Link>

						<Link
							to="/contact"
							className="btn-secondary px-10 py-4 rounded-full font-semibold text-lg font-poppins inline-block transform transition-all duration-300 hover:scale-105"
						>
							Let's Connect
						</Link>
					</div>

					{/* Decorative divider */}
					<div className="w-32 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto rounded-full"></div>
				</div>
			</div>

			{/* Floating accent elements - Fewer and more subtle */}
			<div className="absolute top-32 left-20 w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
			<div className="absolute top-48 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
			<div className="absolute bottom-40 left-32 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
			<div className="absolute bottom-32 right-20 w-2 h-2 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: "3s" }}></div>
		</div>
	);
}

export default Home;
