import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from "react-toastify";

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const form = useRef();
  const sendEmail = () => {
    

    return emailjs
      .sendForm('service_vipxrfj', 'template_18iezov', form.current, {
        publicKey: '5FdfN9ma1mA-8qEsJ', 
      })
      .then(
        () => {
          console.log('SUCCESS!');
          const formData = new FormData(form.current);

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


const handleSubmit = async (e) => {
  e.preventDefault(); 

  try {
    await sendEmail();
    toast.success("Message sent successfully! 🚀");

    setEmail('');
    setMessage('');
    setName('');
  } catch (error) {
    toast.error("Failed to send message 😢");
  }
};

  const socialLinks = [
    { 
      icon: <FaLinkedinIn />, 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/yash-khatri-45085227b/',
      color: 'bg-blue-600'
    },
    { 
      icon: <FaGithub />, 
      name: 'GitHub', 
      url: 'https://github.com/yashkhatri012',
      color: 'bg-gray-800'
    },
    { 
      icon: <FaEnvelope />, 
      name: 'Email', 
      color: 'bg-red-500',
      url: 'mailto:yashkhatri88540@gmail.com',

       
    },
    { 
      icon: <FaPhone />, 
      name: 'Phone', 
      url: 'tel:+918854089603',
      color: 'bg-green-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const cardHover = {
    scale: 1.05,
    transition: { duration: 0.3 }
  };
  
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-12 px-4">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h1>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Cards */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center p-6 rounded-xl shadow-lg ${link.color} text-white transform transition-all duration-300`}
                whileHover={cardHover}
                variants={itemVariants}
              >
                <div className="text-3xl mr-4">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{link.name}</h3>
                  
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
            <form 
            ref={form}
            onSubmit={handleSubmit}
              className="space-y-6">
              <div>
                <label  className="block text-gray-700 mb-2">Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  name="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name='message'
                   value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message here..."
                ></motion.textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Watermark */}
        <motion.div 
          className="mt-16 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>Any suggetions? Contact me </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;