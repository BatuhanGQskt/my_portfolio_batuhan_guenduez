import { motion } from "framer-motion";
import { slideIn } from "../utils/slideIn";
import Colors from "../constants/colors";
import SectionWrapper from "../hoc/SectionWrapper";

import ProjectIMG from '../assests/project_img_holder.png';


const ContactForm = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 0.8)}
        viewport={{ once: true, amount: 0.25 }} // Ensures the animation triggers only once
      >
        <p style={{ color: Colors.textPrimary }}>Sliding Content</p>
        <img src={ProjectIMG} alt="project image" />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactForm, "Contact Form");
