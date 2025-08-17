import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
                           {/* Navbar */}
        <header className="flex justify-center items-center px-10 py-6">
          <nav className="bg-blue-100 rounded-full px-8 py-4 border border-blue-400 shadow-lg flex items-center space-x-8">
            {/* Pencil Icon */}
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
            
            {/* Navigation Links */}
            <a href="#" className="text-gray-800 font-medium hover:text-blue-500 transition-colors">Home</a>
            <a href="#" className="text-gray-800 font-medium hover:text-blue-500 transition-colors">Speakers</a>
            <a href="#" className="text-gray-800 font-medium hover:text-blue-500 transition-colors">Sponsors</a>
            <a href="#" className="text-gray-800 font-medium hover:text-blue-500 transition-colors">Team</a>
            <a href="#" className="text-gray-800 font-medium hover:text-blue-500 transition-colors">FAQ</a>
            <a href="#" className="text-gray-800 font-medium hover:text-blue-500 transition-colors">Agenda</a>
          </nav>
        </header>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center pl-50 px-10 py-16 overflow-hidden">
        {/* Blur Pastel Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 opacity-80"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center w-full">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
            API CONFERENCE <br />
            <span className="text-blue-600">2025</span>
          </h1>
          <p className="text-gray-600 max-w-lg">
            Join us for the most comprehensive API development conference of the year. 
            Learn from industry experts and discover the latest trends in API technology.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
              Book A Ticket
            </button>
          </div>
        </div>

                                   {/* Right Video */}
          <div className="flex-1 mt-10 md:mt-0 flex justify-center relative">
            {/* Abstract Background Shapes for Video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full opacity-20 transform rotate-12"></div>
              <div className="absolute w-64 h-64 bg-gradient-to-tr from-orange-200 to-pink-300 rounded-full opacity-25 transform -rotate-12"></div>
              <div className="absolute w-48 h-48 bg-gradient-to-r from-green-200 to-blue-300 rounded-full opacity-30 transform rotate-45"></div>
              <div className="absolute w-32 h-32 bg-gradient-to-bl from-purple-200 to-indigo-300 rounded-full opacity-20 transform -rotate-30"></div>
              <div className="absolute w-24 h-24 bg-gradient-to-tl from-yellow-200 to-orange-300 rounded-full opacity-35 transform rotate-60"></div>
            </div>
          </div>
        </div>
      </section>

             {/* About Section */}
       <section className="px-10 py-16 bg-blue-50">
         <div className="max-w-6xl mx-auto">
           <div className="bg-white rounded-2xl shadow-lg p-12">
             <div className="grid md:grid-cols-2 gap-12">
               {/* Left Section */}
               <div className="space-y-6">
                 <h2 className="text-4xl font-bold text-blue-600">
                   About API Conf 2025
                 </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At KoiAmor, we believe that true well-being begins with remembering who you are — beneath the noise, the roles, and the expectations.
                </p>
              </div>

              {/* Right Section */}
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  We were born not out of a business plan, but a lived experience: the ache of burnout, the silence around mental health, the disconnection from the body, and the longing for something deeper.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  KoiAmor is a return — to your rhythm, your truth, and your wholeness.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We&apos;re here to create experiences that don&apos;t just inform, <span className="font-bold">but transform</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
