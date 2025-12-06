import React from "react";
import { MdWork, MdSchool, MdTravelExplore, MdEdit, MdKeyboard, MdEmail, MdPhone } from "react-icons/md";

export default function Collab() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-4xl font-bold mb-6">Collab</h1>
      <p className="text-gray-700 mb-10 text-lg">
        Let's collaborate, learn, explore, and grow together. Choose what you'd like to connect with me for:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hire Me */}
        <div className="p-6 bg-slate-100 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center gap-4">
            <MdWork className="text-green-600 text-4xl" />
            <div>
              <h2 className="text-xl font-semibold">Hire Me</h2>
              <p className="text-gray-600 text-sm">Open for roles & freelance opportunities.</p>
            </div>
          </div>
        </div>

        {/* For Training / Learning */}
        <div className="p-6 bg-slate-100 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center gap-4">
            <MdSchool className="text-blue-600 text-4xl" />
            <div>
              <h2 className="text-xl font-semibold">Training / Learning</h2>
              <p className="text-gray-600 text-sm">Guidance, mentorship, and learning sessions.</p>
            </div>
          </div>
        </div>

        {/* Travel Advice / Talk */}
        <div className="p-6 bg-slate-100 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center gap-4">
            <MdTravelExplore className="text-purple-600 text-4xl" />
            <div>
              <h2 className="text-xl font-semibold">Travel Advice / Talk</h2>
              <p className="text-gray-600 text-sm">Ask me about travel planning & experiences.</p>
            </div>
          </div>
        </div>

        {/* Content Writing */}
        <div className="p-6 bg-slate-100 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center gap-4">
            <MdEdit className="text-orange-600 text-4xl" />
            <div>
              <h2 className="text-xl font-semibold">Content Writing</h2>
              <p className="text-gray-600 text-sm">Blogs, articles, documentation & more.</p>
            </div>
          </div>
        </div>

        {/* Typing & Data Entry */}
        <div className="p-6 bg-slate-100 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center gap-4">
            <MdKeyboard className="text-red-600 text-4xl" />
            <div>
              <h2 className="text-xl font-semibold">Typing & Data Entry</h2>
              <p className="text-gray-600 text-sm">Fast and accurate typing & data-related tasks.</p>
            </div>
          </div>
        </div>

        {/* Email & Phone */}
        <div className="p-6 bg-slate-100 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center gap-4">
            <MdEmail className="text-teal-600 text-4xl" />
            <div>
              <h2 className="text-xl font-semibold">Email & Phone</h2>
              <p className="text-gray-600 text-sm">
                Reach me at: <br />
                Email: example@email.com <br />
                Phone: +123 456 7890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
