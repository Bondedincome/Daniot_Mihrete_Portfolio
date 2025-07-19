import { Link } from 'react-router-dom'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/400x250/1e293b/ffffff?text=E-Commerce",
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Socket.io", "Tailwind CSS"],
      image: "https://via.placeholder.com/400x250/1e293b/ffffff?text=Task+App",
      link: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing creative development work with smooth animations and elegant design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "https://via.placeholder.com/400x250/1e293b/ffffff?text=Portfolio",
      link: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white font-inter pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="relative -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="relative -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-500/10 to-red-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A collection of projects that showcase my passion for creative development 
            and innovative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-rose-500/50 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-poppins text-white group-hover:text-rose-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-rose-500/20 to-purple-500/20 text-rose-300 rounded-full border border-rose-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-rose-400 hover:text-rose-300 font-medium transition-colors duration-300 group-hover:translate-x-1"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-slate-300 mb-6">
            Interested in working together? Let's create something amazing.
          </p>
          <Link 
            to="/contact"
            className="btn-primary px-8 py-4 rounded-full font-semibold text-lg font-poppins inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects 