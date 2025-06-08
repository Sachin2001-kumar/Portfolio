// "use client";

// import React from "react";
// import SectionHeading from "./SectionHeading";
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
// import SubmitBtn from "./SubmitBtn";
// import toast from "react-hot-toast";
// import { sendEmail } from "@/app/action/sendemail";
// import { Status } from "@/app/action/type";

// export default function Contact() {
//   const { ref } = useSectionInView("Contact");

//   return (
//     <motion.section
//       id="contact"
//       ref={ref}
//       className="mb-20 sm:mb-28 w-[min(100%,42rem)] text-center mx-auto px-4"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       viewport={{ once: true }}
//     >
//       <SectionHeading>Contact Me</SectionHeading>

//       <p className="text-gray-700 -mt-4 text-lg font-medium leading-relaxed">
//         I'm always open to collaboration and discussion. You can reach me at{" "}
//         <a
//           className="underline text-blue-600 hover:text-blue-800 font-semibold"
//           href="mailto:sachinkumardagar20001@gmail.com"
//         >
//           sachinkumardagar20001@gmail.com
//         </a>{" "}
//         or use the form below.
//       </p>

//       <motion.form
//         className="mt-10 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-zinc-700 flex flex-col gap-4"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}
//         viewport={{ once: true }}
//         action={async (formData) => {
//           const res = await sendEmail(formData);
//           if (res.status === Status.FAILURE) {
//             toast.error("An error occurred. Please try again later.");
//             return;
//           }
//           if (res.status === Status.INVALIDEMAIL) {
//             toast.error("Invalid email address. Please use a valid one.");
//             return;
//           }
//           if (res.status === Status.INVALIDMESSAGE) {
//             toast.error("Message should be under 5000 characters.");
//             return;
//           }
//           toast.success("Email sent successfully!");
//         }}
//       >
//         <input
//           className="h-14 px-4 rounded-xl border border-gray-300 dark:border-zinc-600 bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//           name="senderEmail"
//           type="email"
//           required
//           maxLength={500}
//           placeholder="Your email address"
//         />
//         <textarea
//           className="h-52 p-4 rounded-xl border border-gray-300 dark:border-zinc-600 bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"
//           name="message"
//           required
//           maxLength={5000}
//           placeholder="Your message"
//         />
//         <SubmitBtn />
//       </motion.form>
//     </motion.section>
//   );
// }
