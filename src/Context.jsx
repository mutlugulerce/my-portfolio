import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [myState, setMyState] = useState("Hello, I am Mutlu Gülerce");
  const [myStateSecond, setMyStateSecond] = useState(
    "What would you like to know?"
  );
  const [myStateThird, setMyStateThird] = useState("Here are my skills:");
  const [myStateFourth, setMyStateFourth] = useState(
    "⭐ Here are my favorite projects ⭐"
  );
  const [skills, setSkills] = useState("Skills");
  const [projects, setProjects] = useState("Projects");
  const [contact, setContact] = useState("Contact");
  const [home, setHome] = useState("Back Home");
  const [nike, setNike] = useState(
    ""
  );
  const [jobster, setJobster] = useState(
    ""
  );

  const [contactText, setContactText] = useState(
    'Check out my social media to keep in touch.'
  );
  return (
    <MyContext.Provider
      value={{
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
        myStateThird,
        setMyStateThird,
        home,
        setHome,
        myStateFourth,
        setMyStateFourth,
       nike,
       setNike,
       jobster,setJobster,
        contactText,
        setContactText,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
