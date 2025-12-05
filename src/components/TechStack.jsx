// import React from "react";
// import html from "../../public/html.png";
// import css from "../../public/css.jpg";
// import java from "../../public/java.png";
// import javascript from "../../public/javascript.png";
// import oracle from "../../public/oracle.png";
// import spring from "../../public/spring.png";
// import springBoot from "../../public/springBoot.jpg";
// function TechStack() {
//   const cardItem = [
//     {
//       id: 1,
//       logo: html,
//       name: "MongoDB",
//     },
//     {
//       id: 2,
//       logo: css,
//       name: "CSS",
//     },
//     {
//       id: 3,
//       logo: java,
//       name: "Java",
//     },
//     {
//       id: 4,
//       logo: javascript,
//       name: "JavaScript",
//     },
//     {
//       id: 5,
//       logo: oracle,
//       name: "Oracle",
//     },
//     {
//       id: 6,
//       logo: spring,
//       name: "Spring",
//     },
//     {
//       id: 7,
//       logo: springBoot,
//       name: "Spring Boot",
//     },
//   ];
//   return (
//     <div
//       name="TechStack"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5">TechStack</h1>
//         <p className="  ">
//           I've more than 2 years of TechStack in below technologies.
//         </p>
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
//           {cardItem.map(({ id, logo, name }) => (
//             <div
//               className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
//               key={id}
//             >
//               <img src={logo} className="w-[150px] rounded-full" alt="" />
//               <div>
//                 <div className="">{name}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TechStack;




import React from "react";

// Images from public folder (use direct paths)
const cardItem = [
  {
    id: 1,
    logo: "/html.png",
    name: "HTML",
  },
  {
    id: 2,
    logo: "/css.jpg",
    name: "CSS",
  },
  {
    id: 3,
    logo: "/javascript.png",
    name: "JavaScript",
  },
 
  {
    id: 4,
    logo: "/python.webp",
    name: "Python",
  },
  
  
  {
    id: 5,
    logo: "/java.png",
    name: "Java",
  },
  {
    id: 6,
    logo: "/selemium.png",
    name: "Oracle",
  },
  
];

function TechStack() {
  return (
    <div
      name="TechStack"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">TechStack</h1>
        <p className="text-gray-700 text-base">
          I have over 2 years of hands-on TechStack working with these technologies across web development, data science, and teaching.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 my-8">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center border-[2px] rounded-xl shadow-md p-4 hover:scale-105 duration-300"
            >
              <img
                src={logo}
                alt={name}
                className="w-[80px] h-[80px] object-contain mb-3"
              />
              <div className="font-semibold text-lg text-center">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
