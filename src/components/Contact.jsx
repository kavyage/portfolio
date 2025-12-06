import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

function Contact() {
  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-2">Let's Connect</h1>
      <p className="text-gray-700 mb-6">
        Have a question, project idea, or just want to say hi? You can reach me via email or phone.
      </p>

      <div className="flex justify-center">
        <div className="bg-slate-100 px-8 py-6 rounded-xl shadow-md w-full max-w-xl">
      

          {/* Email & Phone Row */}
          <div className="flex justify-between items-center">
            {/* Email */}
            <div className="flex items-center gap-2">
              <MdEmail className="text-green-600 text-2xl" />
              <a href="mailto:kavyaitprofessional@gmail.com" className="text-gray-700 hover:underline">
                kavyaitprofessional@gmail.com
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <MdPhone className="text-green-600 text-2xl" />
              <a href="tel:+918899501208" className="text-gray-700 hover:underline">
                +91 8899501208
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default Contact;

