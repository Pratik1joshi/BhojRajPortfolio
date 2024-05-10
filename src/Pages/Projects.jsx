import React, { useState } from "react";
import { motion } from "framer-motion";
import amazon from "../Components/Assets/amazon.png";
import parallex from "../Components/Assets/parallex.png";
import clock from "../Components/Assets/Time.png";
import sunduk from "../Components/Assets/Sunsuk.png";
import joke from "../Components/Assets/jokes.png";
import tic_tak from "../Components/Assets/tic-tac-toe.png";
import "./Projects.css";
import Modelss from "../Components/Modelss/Modelss";

const Project = () => {

    const [selectedId, setSelectedId] = useState(null)


 
    // {items.map(item => (
    //   <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
    //     <motion.h5>{item.subtitle}</motion.h5>
    //     <motion.h2>{item.title}</motion.h2>
    //   </motion.div>
    // ))}
    
    // <AnimatePresence>
    //   {selectedId && (
    //     <motion.div layoutId={selectedId}>
    //       <motion.h5>{item.subtitle}</motion.h5>
    //       <motion.h2>{item.title}</motion.h2>
    //       <motion.button onClick={() => setSelectedId(null)} />
    //     </motion.div>
    //   )}
    // </AnimatePresence>


  const projectList = [
    { id: 1, url: amazon, title: "Amazon Clone", description: "Description" },
    {
      id: 2,
      url: parallex,
      title: "Parallex Website",
      description: "Description",
    },
    { id: 3, url: clock, title: "Clock", description: "Description" },
    {
      id: 4,
      url: joke,
      title: "Random Joke Generator",
      description: "Description",
    },
    { id: 5, url: tic_tak, title: "Tik Tak Tok", description: "Description" },
    { id: 6, url: sunduk, title: "Sunduk", description: "Description" },
  ];

  return (
    <div className="main-projects">
    
      {projectList.map((items, i) => (
        <motion.div
        
          initial={{
            opacity: 0,
            translateX: i % 2 == 0 ? -70 : 70,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{ duration: 0.8, delay: i*0.2 }}
          whileHover={{
            scale:1.03,
            transition:{
                delay:0.1,
                duration:0.3
            }
        }}
          key={items.id}
          className="smallProjects"
          layoutId={items.id} onClick={() => setSelectedId(items)}
        >
          <img src={items.url} alt="" />
          <div className="titles_box">
            <motion.h2 className="projectListHeading">{items.title}</motion.h2>
            <motion.p className="projectListDescription">{items.description}</motion.p>
          </div>
        </motion.div>
      ))}
      {selectedId &&
        <Modelss setSelectedId={setSelectedId} selectedId={selectedId}/>
      }
    </div>
  );
};

export default Project;
