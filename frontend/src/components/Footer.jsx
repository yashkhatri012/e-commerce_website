import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaPinterest, 
  FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay, 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane
} from 'react-icons/fa';
import { ShopContext } from '../context/ShopContext';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const {navigate}= useContext(ShopContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <>
    <div className="h-6 bg-gradient-to-b from-white to-slate-200"></div>

    <motion.footer 
      className="bg-slate-200 text-gray-800 pt-16 pb-8 border-t border-gray-200 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <motion.div 
            className="space-y-4"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">YK</span>
              </div>
              <h2 className="text-2xl font-bold ml-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Forever
              </h2>
            </div>
            <p className="text-gray-600">
              Discover the latest trends in fashion, technology, and lifestyle. Quality products at affordable prices.
            </p>
            <div className="flex space-x-4 pt-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaPinterest].map((Icon, index) => (
                <motion.a 
                  key={index}
                  onClick={()=>navigate('/not-available')}
                  className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="text-gray-600 hover:text-blue-600" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold border-b border-blue-400 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {['New Arrivals', 'Best Sellers', 'Trending Now'].map((item, index) => (
                <li key={index}>
                  <motion.a 
                    onClick={()=>navigate('/collection')}
                    className="text-gray-600 hover:text-blue-600 flex items-center transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </motion.a>


                </li>
              ))}
              {['Sale', 'Clearance'].map((item, index) => (
                <li key={index}>
                  <motion.a 
                    onClick={()=>navigate('/not-available')}
                    className="text-gray-600 hover:text-blue-600 flex items-center transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </motion.a>

                  
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Customer Service */}
          <motion.div 
            className="space-y-4"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold border-b border-blue-400 pb-2 inline-block">Customer Service</h3>
            <ul className="space-y-3">
              <li >
                  <motion.a 
                    onClick={()=>navigate('/contact')}
                    className="text-gray-600 hover:text-blue-600 flex items-center transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Contact Us
                  </motion.a>
                </li>
              {[ 'Shipping Policy', 'Return Policy', 'FAQ', 'Privacy Policy', 'Terms & Conditions'].map((item, index) => (
                <li key={index}>
                  <motion.a 
                    onClick={()=>navigate('/not-available')}
                    className="text-gray-600 hover:text-blue-600 flex items-center transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div 
            className="space-y-4"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold border-b border-blue-400 pb-2 inline-block">Newsletter</h3>
            <p className="text-gray-600">
              Subscribe to get special offers, free giveaways, and new product updates.
            </p>
            
            <form onSubmit={handleSubmit} className="relative mt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-blue-500 pr-12"
                required
              />
              <motion.button 
                type="submit"
                className="absolute right-2 top-2 bg-blue-600 p-2 rounded-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaPaperPlane className="text-white" />
              </motion.button>
            </form>
            
            {isSubscribed && (
              <motion.div 
                className="mt-2 text-green-600 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Thanks for subscribing!
              </motion.div>
            )}
            
            <div className="pt-6">
              <h4 className="font-medium mb-3">Contact Info</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="mr-3 text-blue-500" />
                  <span> National Institue of Technology, Jaipur</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <FaPhone className="mr-3 text-blue-500" />
                  <span>+91 88540 89603</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <FaEnvelope className="mr-3 text-blue-500" />
                  <span>2024umt1230@mnit.ac.in</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* Payment Methods */}
        <motion.div 
          className="flex flex-col items-center py-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-gray-600 mb-4">We Accept</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay].map((Icon, index) => (
              <motion.div 
                key={index}
                className="bg-gray-100 p-3 rounded-lg border border-gray-200"
                whileHover={{ y: -5, backgroundColor: "#ebf4ff" }}
                transition={{ duration: 0.3 }}
              >
                <Icon onClick={()=>navigate('/not-available')} className="text-3xl text-gray-700" />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Copyright */}
        <motion.div 
          className="text-center pt-8 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Forever. All rights reserved. 
            Designed and developed by <span className="text-blue-600">Yash Khatri</span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
    </>
  );
};

export default Footer;