import React from "react";

import pic from "../../public/photo5.jpg";

import { FaBlogger } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



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

Hi, I'm G E Kavya — a Software Development Engineer in Test by profession, a certified typewriter enthusiast, a writer by hobby, and an educator who loves sharing knowledge. I also enjoy practicing digital art tools and blending creativity with technology.

As an SDET, passionate about delivering reliable, high-quality software through smart testing and efficient automation. I work with tools like Selenium, Playwright and I enjoy building robust test frameworks that make development faster and stronger. With experience in UI, API testing, CI/CD/CT pipelines, and performance validation, I focus on preventing issues before they happen and ensuring every release is stable and user-ready. Whether it's designing automated suites or digging into a tricky defect, I bring patience, precision, and a problem-solving mindset to every project. Always learning, always optimizing and always committed to quality.
            </p>

            
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                
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
