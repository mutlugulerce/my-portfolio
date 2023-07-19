import React, { useEffect } from "react";
import Project1 from './assets/Screenshot_1.png';
import Project2 from './assets/Screenshot_2.png'
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MyContext } from "./Context";
import { useContext } from "react";
import { FiExternalLink } from "react-icons/fi";
function Projects() {
  const {
    myStateFourth,
    setMyStateFourth,
    lang,
    setLang,
    home,
    setHome,
  nike,
  setNike,
  jobster,
  setJobster
   
  } = useContext(MyContext);
  useEffect(() => {
    if (lang == "en") {
      setMyStateFourth("⭐ Here are my favorite projects ⭐");
      setHome("Back Home");
      setJobster(
       
      );
      setNike(
        
      );
  
    } else if (lang == "tr") {
      setMyStateFourth("⭐ İşte favori projelerim ⭐");
      setHome("Geri Dön");
      setJobster(
        "Jobster Development uygulaması, Redux Toolkit anlamında çok derinlemesine bir proje olup, 3 farklı Slice yapısı kullanılmıştır.Bunun yanında hem Css yapısı olarak Wrapper yapısı tercih edilmiş ve toast yapısı kullanılmış keyifli bir projedir."
      );
      setNike(
        "'Nike E-Commerce', Tailwind CSS ile kullanılmış, Redux Toolkit ile oluşturulmuş ve içeriğinde e-ticaret sayfasının tüm gerekleri bulunan bir projedir."
      );
    
    }
  }, [lang]);
  return (
    <div className="text-white">
      <div className="text-center typewriter">
        <h1 className="text-sm md:text-2xl lg:text-3xl tracking-tight bg-slate-700 bg-opacity-20  rounded-2xl p-3 ">
          {myStateFourth}
        </h1>
      </div>
      <div className="grid grid-cols-1 mt-2 md:grid-cols-2 gap-6">
        <div className="bg-gray-400 bg-opacity-50 rounded-lg p-6">
        <a href="https://github.com/mutlugulerce/rtoolkit-tailwind-nike-e-commerce " target="_blank" rel="noopener noreferrer">   <img className="w-full mb-4" src={Project1} alt="Project 1" /> </a>
          <h2 className="text-lg font-bold mb-2">
            Project 1: <span className="text-purple-400">Nike E-Commerce</span>{" "}
          </h2>
          <p className="text-gray-700">{nike}</p>
      <div className="w-full flex justify-end"> <a href="https://github.com/mutlugulerce/rtoolkit-tailwind-nike-e-commerce">   <FiExternalLink className="" size={25}/></a></div>
        </div>
        <div className="bg-gray-400  bg-opacity-50 rounded-lg p-6">
       <a href="https://github.com/mutlugulerce/redux-toolkit-jobster" target="_blank" rel="noopener noreferrer">  <img className="w-full mb-4" src={Project2} alt="Project 2" /></a> 
          <h2 className="text-lg font-bold mb-2">
            Project 2: <span className="text-purple-400">Jobster Development</span>
          </h2>
          <p className="text-gray-700">{jobster}</p> <div className="w-full flex justify-end"> <a href="https://github.com/mutlugulerce/redux-toolkit-jobster">   <FiExternalLink className="" size={25}/></a></div>
        </div>
        
      </div>
      <div className="text-center">
        {" "}
        <Link className="btn btn-primary m-3" to="/portfolio-website">
          {home}{" "}
        </Link>
      </div>
      <a href="https://github.com/mutlugulerce" target="_blank" rel="noopener noreferrer">
        
        <div className="bg-black bg-opacity-50 text-center flex justify-center flex-col items-center ">
          Show More <AiFillGithub size={50} />
        </div>
      </a>
    </div>
  );
}

export default Projects;
