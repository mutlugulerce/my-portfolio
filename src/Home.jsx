import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pp from "./assets/ai.png";
import "animate.css";
import { useContext } from "react";
import { MyContext } from "./Context";
import { FiMail } from "react-icons/fi";
import logo from "./assets/Untitled_logo.png";
const Home = () => {
  const {
    myState,
    setMyState,
    myStateSecond,
    setMyStateSecond,
    lang,
    setLang,
    skills,
    setSkills,
    projects,
    setProjects,
    contact,
    setContact,
  } = useContext(MyContext);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  const LoadingScreen = () => {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
        <img src={logo} alt="logo" className="w-32 p-4 bg-white rounded-2xl bg-opacity-25 animate__animated animate__rotateIn" />
      </div>
    );
  };
  
  useEffect(() => {
    if (lang == "en") {
      setMyState("Hello, I'm Mutlu Gülerce");
      setMyStateSecond("What would you like to know?");
      setSkills('skills')
      setProjects('Projects')
      setContact('Contact')
    } else if (lang == "tr") {
      setMyState("Merhaba, Ben Mutlu.");
      setMyStateSecond("Ne için gelmiştiniz?");
      setSkills('Beceriler')
      setProjects('Projeler')
      setContact('İletişim')
    }
 // Set isLoading to false once the data has loaded
  }, [lang]);
  useEffect(()=> {
setTimeout(() => {
      setIsLoading(false);
}, 1000);
  },[])
  // Conditionally render the loading screen
  if (isLoading) {
    return   <LoadingScreen />
  }

  return (
    <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
      <div className="relative w-48 h-48 mx-auto mb-6 border-2 border-purple-500 rounded-full overflow-hidden ">
  <img src={pp} alt="Profile Picture" className="absolute inset-0 w-full h-full object-cover rounded-full shadow-md transition-transform duration-200 transform hover:scale-105" />
</div>

   <div className="flex justify-center mb-5"> <a href="mailto:gulercemutlu1993@gmail.com"><footer className="bg-black hover:bg-pink-800 hover:cursor-pointer transition-all duration-200 bg-opacity-50 rounded-full py-4">
       <div className="container mx-auto px-4">
       <div className="flex flex-wrap items-center justify-between">
         
          
            <FiMail className="text-white text-xl hover:text-white" />
         
        </div> 
      </div>
    </footer></a></div>
      <div className="text-center typewriter">
        <h1 className="text-2xl md:text-6xl lg:text-7xl tracking-tight bg-slate-600 bg-opacity-30 p-2 rounded-2xl">
          {myState}
        </h1>
      </div>
      <div className="text-sm">
        <p
          className={
            isTyping
              ? "typewriter text-center animate__animated animate__heartBeat mt-4"
              : "hidden text-sm "
          }
        >
          {myStateSecond}{" "}
        </p>
      </div>
      <div>
        <div className="flex justify-center mt-12 space-x-4 text-xl  animate__animated animate__flash">
          <Link
            to="/portfolio-website/skills"
            className="btn bg-black bg-opacity-40 btn-secondary btn-outline "
          >
            {skills}
          </Link>
          <Link
            to="/portfolio-website/projects"
            className="btn bg-black bg-opacity-40 btn-secondary btn-outline "
          >
        {projects}
          </Link>
          <Link
            to="/portfolio-website/contact"
            className="btn bg-black bg-opacity-40 btn-secondary btn-outline "
          >
         {contact}
          </Link>
        </div>
      </div>
   
    </div>
  );
};

export default Home;
