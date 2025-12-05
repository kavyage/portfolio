import React from "react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

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
            href="/Kavya-Resume.pdf"
            download="Kavya-Resume.pdf"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-6 border rounded-lg">
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.10.113/build/pdf.worker.min.js`}>
            <Viewer
              fileUrl="/kavya-portfolio-resume.pdf"
              defaultScale={1.2}
            />
          </Worker>
        </div>
      </div>
    </div>
  );
}

export default About;
