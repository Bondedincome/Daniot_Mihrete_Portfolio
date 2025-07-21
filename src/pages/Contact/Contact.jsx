import { useState } from "react";
import "./Contact.css";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
	};

	const socialLinks = [
		{
			name: "GitHub",
			url: "https://github.com/Bondedincome",
			icon: (
				<svg
					className="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>GitHub</title>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.793-.26.793-.577v-2.021c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.754-1.333-1.754-1.089-.746.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.832 2.807 1.304 3.492.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.311.469-2.382 1.236-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.047.137 3.006.403 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.241 2.873.118 3.176.77.84 1.235 1.911 1.235 3.222 0 4.609-2.807 5.624-5.479 5.921.431.372.824 1.102.824 2.222v3.292c0 .319.192.694.801.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"
					/>
				</svg>
			),
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/daniot-woldetinsae-339286240/",
			icon: (
				<svg
					className="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>LinkedIn</title>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.43c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.06 2.06-2.06 1.14 0 2.07.92 2.07 2.06 0 1.14-.93 2.07-2.07 2.07zm15.14 13.02h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29z"
					/>
				</svg>
			),
		},
		{
			name: "Telegram",
			url: "https://t.me/DONI_Wo",
			icon: (
				<svg
					className="w-6 h-6"
					viewBox="0 0 240 240"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="120" cy="120" r="120" fill="#37AEE2" />
					<circle cx="120" cy="120" r="120" fill="url(#paint0_linear)" />
					<path
						d="M178.2 74.7L160.3 166.3c-1.3 6.8-4.9 8.5-10 5.3l-27.6-20.4-13.3 12.8c-1.5 1.5-2.7 2.7-5.5 2.7l2-28.9 52.6-47.5c2.3-2 0-3.1-3.6-1.1l-65 41-28-8.7c-6.1-1.9-6.3-6.1 1.3-9l109.5-42.3c5.1-1.9 9.6 1.2 8 9.1z"
						fill="#fff"
					/>
					<defs>
						<linearGradient
							id="paint0_linear"
							x1="120"
							y1="0"
							x2="120"
							y2="240"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#37AEE2" />
							<stop offset="1" stopColor="#1E96C8" />
						</linearGradient>
					</defs>
				</svg>
			),
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white font-inter pt-16">
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="relative -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
				<div className="relative -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-500/10 to-red-600/10 rounded-full blur-3xl"></div>
			</div>

			{/* Main content */}
			<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">
						<span className="gradient-text">Get In Touch</span>
					</h1>
					<p className="text-xl text-slate-300 max-w-3xl mx-auto">
						Let's discuss your next project or just say hello. I'm always
						excited to hear about new opportunities and creative ideas.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<div className="contact-form">
						<h2 className="text-2xl font-bold mb-6 font-poppins">
							Send a Message
						</h2>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-slate-300 mb-2"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
									placeholder="Your name"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-slate-300 mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
									placeholder="your.email@example.com"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-slate-300 mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={6}
									className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 resize-none"
									placeholder="Tell me about your project..."
								/>
							</div>

							<button
								type="submit"
								className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg font-poppins w-full"
							>
								Send Message
							</button>
						</form>
					</div>

					{/* Contact Info */}
					<div className="contact-info">
						<h2 className="text-2xl font-bold mb-6 font-poppins">
							Let's Connect
						</h2>
						<p className="text-slate-300 mb-8 leading-relaxed">
							I'm always open to discussing new projects, creative ideas, or
							opportunities to be part of your visions.
						</p>

						{/* Contact Details */}
						<div className="space-y-4 mb-8">
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-purple-600 rounded-lg flex items-center justify-center">
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div>
									<p className="text-sm text-slate-400">Email</p>
									<p className="text-white font-medium">
										hello@daniotmihrete.com
									</p>
								</div>
							</div>

							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-purple-600 rounded-lg flex items-center justify-center">
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								</div>
								<div>
									<p className="text-sm text-slate-400">Location</p>
									<p className="text-white font-medium">Remote / Worldwide</p>
								</div>
							</div>
						</div>

						{/* Social Links */}
						<div>
							<h3 className="text-lg font-semibold mb-4 font-poppins">
								Follow Me
							</h3>
							<div className="flex space-x-4">
								{socialLinks.map((social) => (
									<a
										key={social.name}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:text-rose-400 hover:border-rose-500/50 transition-all duration-300 group"
									>
										<span className="group-hover:scale-110 transition-transform duration-300">
											{social.icon}
										</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
