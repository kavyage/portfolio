import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,

      name: "Web Automation Frameworks List",
      description:
        "desc",
   
      codeLink: "https://github.com/stars/kavyage/lists/web-automation",
    },
    {
      id: 2,
      
      name: "Automated Tools List",
      description:
        "A responsive shopping platform with dynamic cart and product browsing using Bootstrap and JS.",
   
      codeLink: "https://github.com/stars/kavyage/lists/automated-tools",
    },
    {
      id: 3,
 
      name: "API Automation Framework List",
      description:
        "ML model to predict Bangalore house prices using Python, Flask, Pandas, and Scikit-learn.",

      codeLink: "https://github.com/stars/kavyage/lists/api-automation",
    },
    {
      id: 4,
    
      name: "Web Designings List",
      description:
        "Built with Dialogflow to take orders and suggest items. Integrated with AI and NLP.",
 
      codeLink: https://github.com/stars/kavyage/lists/web-design
    },
    {
      id: 5,
     
      name: "Interview Notes",
      description:
        "Used Python and OpenCV to build a face recognition system for smart authentication.",
   
      codeLink: "https://github.com/stars/kavyage/lists/interview",
    },
    
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
          {cardItem.map(({ id, name, description, codeLink }) => (
            <div
              className="md:w-[300px] md:h-auto border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              
              <div className="text-center mt-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-sm">{description}</p>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
