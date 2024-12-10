import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif text-orange-500">Contact Me</h2>
        <p className="mt-4 text-lg">Feel free to reach out for any inquiries or collaboration opportunities!</p>
        <form className="mt-8 max-w-lg mx-auto bg-orange-500 p-8 rounded-lg shadow-lg">
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 mb-4 border-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea 
            placeholder="Your Message" 
            className="w-full p-3 mb-4 border-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
            rows="4"
          ></textarea>
          <button 
            type="submit" 
            className="bg-orange-500 text-black px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
