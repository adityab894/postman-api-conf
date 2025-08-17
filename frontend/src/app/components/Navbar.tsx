import { Link } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PostmanConf
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
              Home
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            
            <a href="/speakers" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
              Speakers
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </a>

            <a href="/sponsors" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
              Sponsors
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </a>

            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
              Team
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </a>
            
            <a href="/faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
              FAQ
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </a>

            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
              Agenda
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
