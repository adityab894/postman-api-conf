"use client"
import CustomPillNav from "../components/CustomPillNav";
import Footer from "../components/Footer";

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="fixed top-0 left-0 w-full h-20 bg-white z-[999]"></div>
      <CustomPillNav />

      <section className="relative px-10 py-16 overflow-hidden mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 mb-4">
              Book Your Ticket
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Secure your spot at THE API CONFERENCE, Pune 2025. Join developers, architects, and technology enthusiasts for this groundbreaking event.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <iframe
              src="https://konfhub.com/widget/api-conf-pune-2025?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=002E6E&ticketCl=002E6E&btnColor=fb5850&fontFamily=Prompt&borderRadius=10"
              id="konfhub-widget"
              title="Register for THE API CONF PUNE 2025"
              width="100%"
              height="600"
              className="rounded-lg shadow-lg border border-gray-200"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
