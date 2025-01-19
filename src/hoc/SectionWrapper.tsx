import { motion } from "framer-motion";
import { FC } from "react";
import { staggerContainer } from "../utils/StaggerContainer";

// Define the types for the HOC parameters
type SectionWrapperProps = {
  idName: string; // The id used for the section
};

// Define the HOC
const SectionWrapper = <P extends object>(
  Component: FC<P>, // The wrapped component
  idName: string // The unique id for the section
) => {
  // Return the HOC
  const HOC: FC<P> = (props) => {
    return (
      <motion.section
        variants={staggerContainer(0.3, 0.2)} // Provide default values or pass dynamically
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        {/* Pass props to the wrapped component */}
        <Component {...props} />
      </motion.section>
    );
  };

  return HOC;
};

export default SectionWrapper;
