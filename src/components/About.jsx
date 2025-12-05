import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>

        <p>
          You can view or download my professional resume below:
        </p>

        <div className="mt-4 mb-6">
          <a
            href="/Kavya-Resume.pdf"  // Place your PDF in the public folder
            download="Kavya-Resume.pdf"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-6">
          <iframe
            src="/kavya-portfolio-resume.pdf"  // Same path as above
            width="100%"
            height="600px"
            className="rounded-lg border"
            title="Kavya Resume"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default About;
