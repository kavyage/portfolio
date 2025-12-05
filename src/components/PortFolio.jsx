// import React from "react";
// import java from "../../public/java.png";
// import python from "../../public/python.webp";
// import mongoDB from "../../public/mongodb.jpg";
// import express from "../../public/express.png";
// import reactjs from "../../public/reactjs.png";
// import nodejs from "../../public/node.png";
// function PortFolio() {
//   const cardItem = [
//     {
//       id: 1,
//       logo: mongoDB,
//       name: "MongoDB",
//     },
//     {
//       id: 2,
//       logo: express,
//       name: "Express",
//     },
//     {
//       id: 3,
//       logo: reactjs,
//       name: "ReactJS",
//     },
//     {
//       id: 4,
//       logo: nodejs,
//       name: "NodeJS",
//     },
//     {
//       id: 5,
//       logo: python,
//       name: "Python",
//     },
//     {
//       id: 6,
//       logo: java,
//       name: "Java",
//     },
//   ];
//   return (
//     <div
//       name="Portfolio"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
//         <span className=" underline font-semibold">Featured Projects</span>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
//           {cardItem.map(({ id, logo, name }) => (
//             <div
//               className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
//               key={id}
//             >
//               <img
//                 src={logo}
//                 className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
//                 alt=""
//               />
//               <div>
//                 <div className="px-2 font-bold text-xl mb-2">{name}</div>
//                 <p className="px-2 text-gray-700">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 </p>
//               </div>
//               <div className=" px-6 py-4 space-x-3 justify-around">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
//                   Video
//                 </button>
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
//                   Source code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PortFolio;


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
      logo: reactjs,
      name: "VGU Trip Registration Form",
      description:
        "A web app to streamline student trip registrations using HTML, CSS, JS, PHP, and MySQL.",
      videoLink: "#", // Replace with actual video link
      codeLink: "https://github.com/imrandev01/vgu-trip-form",
    },
    {
      id: 2,
      logo: nodejs,
      name: "E-Commerce Shop",
      description:
        "A responsive shopping platform with dynamic cart and product browsing using Bootstrap and JS.",
      videoLink: "#",
      codeLink: "https://github.com/imrandev01/ecommerce-shop",
    },
    {
      id: 3,
      logo: python,
      name: "House Price Prediction",
      description:
        "ML model to predict Bangalore house prices using Python, Flask, Pandas, and Scikit-learn.",
      videoLink: "#",
      codeLink: "https://github.com/imrandev01/house-price-prediction",
    },
    {
      id: 4,
      logo: express,
      name: "Coffee Shop Chatbot",
      description:
        "Built with Dialogflow to take orders and suggest items. Integrated with AI and NLP.",
      videoLink: "#",
      codeLink: "#",
    },
    {
      id: 5,
      logo: mongoDB,
      name: "Face Detection & Recognition",
      description:
        "Used Python and OpenCV to build a face recognition system for smart authentication.",
      videoLink: "#",
      codeLink: "#",
    },
    {
      id: 6,
      logo: java,
      name: "Teaching & Training",
      description:
        "2+ years of experience teaching computer fundamentals and coding to students.",
      videoLink: "#",
      codeLink: "#",
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
          {cardItem.map(({ id, logo, name, description, videoLink, codeLink }) => (
            <div
              className="md:w-[300px] md:h-auto border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[100px] h-[100px] p-2 rounded-full border-[2px] mx-auto"
                alt={name}
              />
              <div className="text-center mt-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-sm">{description}</p>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <a href={videoLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    Video
                  </button>
                </a>
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