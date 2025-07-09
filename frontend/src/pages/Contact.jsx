import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
const Contact = () => {
  return (
    <div className=" to-gray-100 py-16 px-4  ">
      <div className="text-center text-2xl  pt-10 border-t">
        <Title text1={"📩 CONTACT"} text2={"ME"} />
        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 ">
          <img
            className="sm:w-[400px] lg:w-[250px] md:max-w-[480px]"
            src={assets.contact_img}
            alt=""
          />
          <div className="flex flex-col justify-center items-start gap-6 ">
            <p className="font-semibold text-2xl text-gray-600">
              Let’s connect — here’s where you can find me online:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yash-khatri-45085227b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:scale-105 transition-transform duration-300 shadow-md p-4 rounded-lg bg-white"
              >
                <FaLinkedin size={40} />
                <p className="text-gray-700 font-semibold  p-3">My LinkedIn</p>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yashkhatri012"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:scale-105 transition-transform duration-300 shadow-md p-4 rounded-lg bg-white"
              >
                <FaGithub size={40} />
                <p className="text-gray-700 font-semibold p-3">GitHub</p>
              </a>
              {/* Resume */}
              <a
                href="https://drive.google.com/file/d/1OOCL-ACy8AKjP0VmlMwi4zcXNWRrxbZh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:scale-105 transition-transform duration-300 shadow-md p-4 rounded-lg bg-white"
              >
                <TiDocumentText size={40} />
                <p className="text-gray-700 font-semibold p-3">Resume</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
