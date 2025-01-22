import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { slideIn } from "../utils/slideIn";
import Colors from "../constants/colors";
import SectionWrapper from "../hoc/SectionWrapper";
import { Typewriter } from "react-simple-typewriter";
import { height } from "@mui/system";

const InfoSection = () => {
  const textBackgroundColor = Colors.border;
  const names = [
    "ML Analyst",
    "Compiler Designer",
    "AI Developer",
    "Software Engineer",
  ];

  return (
    <div  id='info_section'>
      {/* SlideIn Left */}
      <div
        className="d-flex justify-content-center align-items-center"
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          viewport={{ once: true, amount: 1 }}
          className="w-50" // Restrict width for better alignment
        >
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '50px',
              color: Colors.textPrimary,
              textAlign: "left", // Contextual alignment for text
            }}
          >
            Hi, I am Batuhan
          </p>
        </motion.div>
      </div>

      {/* SlideIn Right */}
      <div
        className="d-flex justify-content-center align-items-center"
      >
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          viewport={{ once: true, amount: 1 }}
          className="w-20" // Restrict width for better alignment
        >
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '50px',
              color: Colors.textPrimary,
              textAlign: "right", // Contextual alignment for text
            }}
          >
            Welcome to my portfolio. I'm {" "}
            <span
              style={{
                color: Colors.primary,
                backgroundColor: textBackgroundColor,
                padding: "2px 4px",
                borderRadius: "4px",
              }}
            >
              <Typewriter
                words={names}
                loop={0} // Set 0 for infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(InfoSection, "info_section");
