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
import {
  FaBug,
  FaTasks,
  FaFlask,
  FaCloud,
  FaCode,
  FaGitAlt,
  FaCogs,
  FaDatabase,
  FaTerminal,
  FaTachometerAlt,
  FaDesktop,
  FaComments,
  FaToolbox,
  FaClipboardCheck
} from "react-icons/fa";

const cardItem = [
  {
    id: 1,
    icon: <FaBug className="text-red-600 text-2xl" />, // Defect & Project Management
    title: "Defect & Project Management",
    items: ["JIRA", "Rally", "Confluence", "ServiceNow", "SharePoint", "Bugzilla"]
  },
  {
    id: 2,
    icon: <FaClipboardCheck className="text-teal-600 text-2xl" />, // Test Management new color
    title: "Test Management",
    items: ["TestRail", "ALM", "Excel"]
  },
  {
    id: 3,
    icon: <FaCloud className="text-purple-600 text-2xl" />,
    title: "CI/CD and Cloud",
    items: ["Jenkins", "Nexus", "AWS (S3)", "Kibana", "CF", "Kubernetes"]
  },
  {
    id: 4,
    icon: <FaCode className="text-green-600 text-2xl" />,
    title: "Programming, Automation & IDE",
    items: ["Java Selenium", "Groovy Scripts", "Eclipse", "IntelliJ IDEA"]
  },
  {
    id: 5,
    icon: <FaGitAlt className="text-orange-600 text-2xl" />,
    title: "Version Control",
    items: ["Bitbucket", "Git", "SVN", "Maven"]
  },
  {
    id: 6,
    icon: <FaCogs className="text-gray-700 text-2xl" />,
    title: "Frameworks",
    items: ["Hybrid", "Cucumber BDD", "Serenity BDD", "JUnit", "TestNG"]
  },
  {
    id: 7,
    icon: <FaFlask className="text-pink-600 text-2xl" />,
    title: "API",
    items: ["Postman", "Internal API Tools", "RestAssured", "BDD Framework"]
  },
  {
    id: 8,
    icon: <FaDatabase className="text-yellow-600 text-2xl" />,
    title: "DB Tools",
    items: ["Amazon Redshift", "Hubble", "MSSQL", "PGAdmin", "SQL queries"]
  },
  {
    id: 9,
    icon: <FaTerminal className="text-black text-2xl" />,
    title: "OS, Commands & FTP",
    items: ["Windows", "Linux", "Unix", "Putty", "WinSCP", "WinMerge", "NFS/SMB"]
  },
  {
    id: 10,
    icon: <FaTachometerAlt className="text-red-500 text-2xl" />,
    title: "Performance Tools",
    items: ["JMeter"]
  },
  {
    id: 11,
    icon: <FaDesktop className="text-indigo-600 text-2xl" />,
    title: "Workspaces",
    items: ["VRA", "Citrix", "RDP"]
  },
  {
    id: 12,
    icon: <FaComments className="text-blue-500 text-2xl" />,
    title: "Communication Channels",
    items: ["MS Teams", "Amazon Chime", "Slack"]
  },
  {
    id: 13,
    icon: <FaToolbox className="text-teal-600 text-2xl" />,
    title: "Amazon Internal Tools",
    items: [
      "Build tools",
      "Device tools",
      "Content tools",
      "SIM TT",
      "Kanban board",
      "KBITS",
      "KOTA",
      "KDCM",
      "KDCS",
      "Kamino",
      "Embu",
      "Subs",
      "Weblabs"
    ]
  }
];

function TechStack() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-5">TechStack</h1>
      <p className="text-gray-700 text-base">
        I have over 2 years of hands-on experience across automation, CI/CD, cloud,
        internal tools & enterprise platforms.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {cardItem.map(({ id, icon, title, items }) => (
          <div
            key={id}
            className="border-[2px] rounded-xl shadow-md p-5 hover:scale-105 duration-300 bg-white"
          >
            <div className="flex items-center gap-3 mb-3">
              {icon}
              <h2 className="font-bold text-xl text-blue-700">{title}</h2>
            </div>

            {/* Two-column layout only for Amazon Internal Tools */}
            {title === "Amazon Internal Tools" ? (
              <ul className="grid grid-cols-2 gap-x-4 list-disc pl-6 text-gray-700 space-y-1">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
