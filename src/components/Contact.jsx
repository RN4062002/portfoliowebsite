import React from "react";
import { useState } from "react";
import emailjs from 'emailjs-com';

emailjs.init("islyy32MRDQbxGe-W");


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e){
      e.preventDefault();
      const form = e.target;

        emailjs.sendForm('service_v58fp3v', 'template_qa6wz6l', form, "islyy32MRDQbxGe-W")
          .then((result) => {
              alert('Email sent successfully:', result.text);
              // Clear form fields after successful submission
              setName('');
              setEmail('');
              setMessage('');
          }, (error) => {
              console.error('Error sending email:', error.text);
          });
      
    }
  
    return(
      <section>
              <div className="flex flex-col items-center max-w-4xl w-full space-y-6 border border-gray-300 rounded-lg p-6 ">

              <h2 className="text-3xl font-bold text-black">Contact Me</h2>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value) }
                   name='email'
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                   name='message'
                  className="border border-gray-300 rounded-lg p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            </section>

    )
}

export default Contact