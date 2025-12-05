// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// function Contact() {
//   const {
//     register,
//     handleSubmit,

//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       name: data.name,
//       email: data.email,
//       message: data.message,
//     };
//     try {
//       await axios.post("https://getform.io/f/aolzyrgb", userInfo);
//       toast.success("Your message has been sent");
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };
//   return (
//     <>
//       <div
//         name="Contact"
//         className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
//       >
//         <h1 className="text-3xl font-bold mb-4">Contact me</h1>
//         <span>Please fill out the form below to contact me</span>
//         <div className=" flex flex-col items-center justify-center mt-5">
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             // action="https://getform.io/f/raeqjora"
//             // method="POST"
//             className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
//           >
//             <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">FullName</label>
//               <input
//                 {...register("name", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="name"
//                 name="name"
//                 type="text"
//                 placeholder="Enter your fullname"
//               />
//               {errors.name && <span>This field is required</span>}
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">Email Address</label>
//               <input
//                 {...register("email", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 name="email"
//                 type="text"
//                 placeholder="Enter your email address"
//               />
//               {errors.email && <span>This field is required</span>}
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">Message</label>
//               <textarea
//                 {...register("message", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="message"
//                 name="message"
//                 type="text"
//                 placeholder="Enter your Query"
//               />
//               {errors.message && <span>This field is required</span>}
//             </div>
//             <button
//               type="submit"
//               className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;




import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/aolzyrgb", userInfo);
      toast.success("Thanks! Your message has been sent.");
    } catch (error) {
      console.log(error);
      toast.error("Oops! Something went wrong.");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-2">Let's Connect</h1>
      <p className="text-gray-700 mb-6">
        Have a question, project idea, or just want to say hi? Fill out the form below and I’ll get back to you soon.
      </p>

      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-100 w-full max-w-md px-8 py-6 rounded-xl shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4 text-center">Send a Message</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="w-full shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              placeholder="Your full name"
            />
            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="w-full shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              type="email"
              placeholder="you@example.com"
            />
            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="w-full shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              rows="4"
              placeholder="Write your message here..."
            />
            {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;