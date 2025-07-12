import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
// import whiteLogo from '../../assets/whiteLogo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold font-poppins gradient-text">
              Daniot Mihrete
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="nav-link text-slate-300 hover:text-rose-400 transition-colors duration-300 font-inter"
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className="nav-link text-slate-300 hover:text-rose-400 transition-colors duration-300 font-inter"
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className="nav-link text-slate-300 hover:text-rose-400 transition-colors duration-300 font-inter"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-300 hover:text-rose-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/90 backdrop-blur-md rounded-lg mt-2 border border-slate-700/50">
              <Link
                to="/"
                className="block px-3 py-2 text-slate-300 hover:text-rose-400 transition-colors duration-300 font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="block px-3 py-2 text-slate-300 hover:text-rose-400 transition-colors duration-300 font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-slate-300 hover:text-rose-400 transition-colors duration-300 font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 