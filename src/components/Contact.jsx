import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Contact() {
  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4">Let's Connect</h1>
      <p className="text-gray-700 mb-8">
        Have a question, project idea, or just want to say hi? You can reach me
        via email or phone.
      </p>

      <div className="flex justify-center">
        <div className="bg-slate-100 px-8 py-8 rounded-xl shadow-md w-full max-w-xl">
          <div className="flex flex-col gap-6">
            {/* Email Row */}
            <div className="flex items-center gap-4">
              <MdEmail className="text-green-600 text-3xl" />
              <a
                href="mailto:kavyaitprofessional@gmail.com"
                className="text-gray-800 text-lg break-all hover:underline"
              >
                kavyaitprofessional@gmail.com
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300"></div>

            {/* Phone Row */}
            <div className="flex items-center gap-4">
              <MdPhone className="text-green-600 text-3xl" />
              <a
                href="tel:+918899501208"
                className="text-gray-800 text-lg hover:underline"
              >
                +91 8899501208
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
