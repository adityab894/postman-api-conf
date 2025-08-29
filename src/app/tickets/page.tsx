"use client"
import React from 'react';
import Footer from "../components/Footer";

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 mt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Tickets
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Secure your spot at THE API CONFERENCE, PUNE 2025
          </p>
          
          {/* Ticket Information */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Event Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-gray-600"><strong>Date:</strong> November 30, 2024</p>
                <p className="text-gray-600"><strong>Time:</strong> 9:30 AM - 6:00 PM</p>
                <p className="text-gray-600"><strong>Venue:</strong> Pune, Maharashtra</p>
              </div>
              <div>
                <p className="text-gray-600"><strong>Format:</strong> In-Person Conference</p>
                <p className="text-gray-600"><strong>Capacity:</strong> 500+ Participants</p>
                <p className="text-gray-600"><strong>Price:</strong> Free</p>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Registration Coming Soon
            </h2>
            <p className="text-gray-600 mb-6">
              We're working hard to bring you an amazing conference experience. 
              Registration will open soon. Stay tuned for updates!
            </p>
            
            {/* Placeholder for future registration form */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🎫</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Registration Portal
              </h3>
              <p className="text-gray-500">
                Will be available soon
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Have questions? Contact us at{' '}
              <a href="mailto:info@apiconfpune.com" className="text-blue-600 hover:text-blue-800">
                info@apiconfpune.com
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
