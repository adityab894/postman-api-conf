import Image from "next/image";
import CustomPillNav from "./CustomPillNav";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="fixed top-0 left-0 w-full h-20 bg-white z-[999]"></div>
      <CustomPillNav />

      <section className="relative flex flex-col md:flex-row items-center pl-50 px-10 py-16 overflow-hidden mt-20">
        <div className="relative z-10 flex flex-col md:flex-row items-center w-full">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
              THE API CONFERENCE, Pune<br />
              <span className="text-blue-600">2025</span>
            </h1>
            <p className="text-gray-600 max-w-lg">
            The API Conf Pune 2025 is the first edition of a community-driven flagship conference, hosted by the Postman Community Pune. Marking the beginning of a new chapter in India&apos;s tech ecosystem, this conference is dedicated to changing the API revolution in India by bringing together developers, architects, product leaders, and technology enthusiasts from across the country. Designed to spark collaboration and knowledge exchange.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
                Book A Ticket
              </button>
            </div>
          </div>

        <div className="flex-1 mt-10 md:mt-0 flex justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/API.svg"
            alt="API Illustration"
            width={700}
            height={700}
            className="object-contain"
            priority
          />
          </div>
        </div>
        </div>
      </section>

       <section className="px-10 py-16 bg-white">
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
                <p className="text-lg font-semibold text-gray-700 italic">
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
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
