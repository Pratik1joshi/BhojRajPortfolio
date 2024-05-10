import React from "react";
import "./Modelss.css";
import { motion } from "framer-motion";

const Modelss = ({ setSelectedId, selectedId }) => {
  return (
    <div
      className="modals-mainContainer"
      onClick={() => {
        setSelectedId(null);
      }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="inner-mainContainer-Modals"

        initial={{
            opacity: 0,
            translateX: 80,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="modalsTitle">
          <h2>{selectedId.title}</h2>
          <i onClick={()=>setSelectedId(null)} className="fa-solid fa-xmark"></i>
        </div>
        <div className="modalsImage">
          <img src={selectedId.url} alt="" />
        </div>
        <div className="modalsDescription">
          <p>{selectedId.description}</p>
        </div>
        <div className="modalsVisitSites">
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Visit Site</span>
          </button>{" "}
        </div>
      </motion.div>
    </div>
  );
};

export default Modelss;
