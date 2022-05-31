import React, { useState } from "react";
import Head from "next/Head";
const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("")
  return (
    <>
      <Head>
        
        <title className="border border-white">Contact Form</title>
      </Head>
     <form  className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500">
     <h1  className="text-2xl font-bold dark:text-gray-50">Send a message</h1>
     <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Full name<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
      </form>
    </>
  );
};

export default ContactForm;
