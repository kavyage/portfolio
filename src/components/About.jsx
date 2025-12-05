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
          Hello! I'm Kavya, a passionate web developer and AI enthusiast with a strong focus on the <strong>MERN Stack</strong>. 
          With a background in IT and hands-on experience in AI, Data Science, and full-stack development, I love turning ideas into 
          clean, functional, and visually engaging software solutions. Whether it's building e-commerce platforms or predictive models, 
          I strive to create tech that makes a real impact.
        </p>


        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          M.C.A (AI & Data Science), Vivekananda Global University, Jaipur – 2024 <br />
          B.Sc (Physics), L.N.M.U, Darbhanga – 2021 <br />
          Data Science Masters – Physics Wallah <br />
          Machine Learning with Python – Coursera <br />
          Business Intelligence & Visual Analytics – Coursera
        </span>


        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          <strong>Languages:</strong> Python, Java, HTML, CSS, JavaScript <br />
          <strong>Frameworks & Libraries:</strong> React JS, Django, Flask, Bootstrap, Pandas, NumPy, OpenCV, Matplotlib, Seaborn <br />
          <strong>Tools:</strong> VS Code, Git, GitHub, Power BI, Excel, Jupyter Notebooks, PyCharm, Google Colab <br />
          <strong>Other:</strong> WordPress, Data Structures & Algorithms, UI/UX Design, SEO
        </span>


        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          <strong>AI & Data Science Intern</strong> – YBI Foundation (Remote), Mar–Aug 2024 <br />
          Worked on machine learning, deep learning, and NLP projects using Python, TensorFlow, and scikit-learn. <br /><br />

          <strong>AI Intern</strong> – Pantech Solutions (Remote), Mar–Aug 2024 <br />
          Built a chatbot using Dialogflow for a coffee shop assistant. Developed face detection and recognition models using OpenCV. <br /><br />

          <strong>Data Analytics Intern</strong> – Accenture (Forage Simulation) <br />
          Cleaned and analyzed datasets to uncover insights. Delivered presentations and dashboards for strategic decision-making.
        </span>

        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Projects</h1>
        <span>
          <strong>VGU Manali Trip Registration Form</strong> – HTML, CSS, JS, PHP, MySQL <br />
          Designed a web app to streamline student trip registrations. <br /><br />

          <strong>E-Commerce Shop</strong> – HTML, CSS, JS, Bootstrap <br />
          Built a responsive shopping platform with dynamic cart and product browsing. <br /><br />

          <strong>House Price Prediction</strong> – Python, Flask, ML <br />
          Created a model to predict Bangalore house prices using real estate data.
        </span>
        <br /><br />

        <h1 className="text-green-600 font-semibold text-xl">Achievements & Activities</h1>
        <span>
          🏆 Recognized for teaching excellence as a computer instructor (2+ years) <br />
          📝 Co-authored a research paper during college, showcasing teamwork and academic writing
        </span>


        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to use technology to solve real-world problems and build meaningful digital experiences. 
          I believe in continuous learning, staying curious, and always pushing boundaries. Whether it's a sleek UI or 
          a powerful backend, I aim to deliver work that’s both functional and beautiful.
        </p>

      </div>
    </div>
  );
}

export default About;
