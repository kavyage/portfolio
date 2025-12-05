import React from "react";

import pic from "../../public/photo5.jpg";

import { FaBlogger } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to My Space</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["SDET", "QA", "Software Tester", "Manual Tester", "Automation Developer","Programmer", "Coder", "Writer", "TypeWriter", "Tutor", "Trainer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hi, I'm G E Kavya — a full-stack developer with a love for building clean, user-friendly websites. I work with React, Django, WordPress, and more, and I enjoy solving real-world problems through tech. I also have a strong background in digital marketing, so I know how to make things not just work, but stand out. Whether it's designing an e-commerce site or fixing a tricky bug, I bring patience, creativity, and a hands-on approach to everything I do. Always learning, always building — and always staying true to who I am.
            </p>

            
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/in/kavyage" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/kavyage/" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://medium.com/@krazylazykavy" target="_blank">
                      <FaMedium className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://krazylazykavy.blogspot.com/" target="_blank">
                      <FaBlogger className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
