// Minor edit to preserve GitHub commit streak
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../theme/ThemeContext";
import CreativeToggle from "../../utils/Toggle/CreativeToggle";
import daniotMihrete from "../../assets/daniotMihrete";
import "./Home.css";

function Home() {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white font-inter">
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-500/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
				<div
					className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-500/20 to-red-600/20 rounded-full blur-3xl animate-float"
					style={{ animationDelay: "1s" }}
				></div>
			</div>

			{/* Main content */}
			<div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-16">
				<div className="max-w-4xl mx-auto text-center">
					{/* Profile Photo */}
					<div className="mb-12 flex justify-center">
						<div className="relative animate-float">
							<div className="w-32 h-32 rounded-full bg-gradient-to-r from-rose-400 via-purple-500 to-orange-400 p-1 animate-glow">
								<div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
									<div className="text-4xl font-bold font-poppins gradient-text">
										<img
											src={daniotMihrete}
											alt="Daniot Mihrete Logo"
											className="h-8 w-auto transition-transform duration-300 group-hover:scale-110"
										/>
									</div>
								</div>
							</div>
							<div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400/30 via-purple-500/30 to-orange-400/30 blur-xl animate-pulse"></div>
						</div>
					</div>

					{/* Headline */}
					<h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-poppins">
						<span className="gradient-text">Hi, I'm a Creative Developer</span>
						<br />
						<span className="text-white">who Cares</span>
					</h1>

					{/* Bio */}
					<p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed font-inter">
						I craft digital experiences that bridge the gap between logic and
						creativity, where every line of code tells a story and every pixel
						serves a purpose. Passionate about building solutions that matter.
					</p>

					{/* Call-to-Action Buttons */}
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
						<Link
							to="/projects"
							className="btn-primary px-8 py-4 rounded-full font-semibold text-lg font-poppins inline-block"
						>
							View Projects
						</Link>

						<Link
							to="/contact"
							className="btn-secondary px-8 py-4 rounded-full font-semibold text-lg font-poppins inline-block"
						>
							Contact Me
						</Link>
					</div>
					<br />

					{/* Creative Toggle below CTA buttons */}
					<div className="flex justify-center mt-8">
						<CreativeToggle theme={theme} onToggle={setTheme} />
					</div>

					{/* Decorative divider */}
					<div className="mt-20 w-32 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto rounded-full"></div>
				</div>
			</div>

			{/* Floating accent elements */}
			<div className="absolute top-20 left-20 w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
			<div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
			<div className="absolute bottom-32 left-32 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-500"></div>
			<div className="absolute top-1/2 right-10 w-1 h-1 bg-rose-300 rounded-full animate-pulse delay-1500"></div>
			<div className="absolute bottom-20 right-20 w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-2000"></div>
		</div>
	);
}

export default Home;
