import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}> Education at University of Auckland </h2>
          
        <p className={styles.sectionSubText}> I am proud to have attended the University of Auckland, a world-class institution ranked 68th among QS World University Rankings. The university's rigorous academic environment and commitment to innovation have played a significant role in my development as a software developer. </p>
        <p className={styles.sectionSubText}> As a double major in Computer Science and Information Technology Management at the University of Auckland, I have gained a comprehensive understanding of both the technical and managerial aspects of software development. My coursework has provided me with a strong foundation in programming languages, data structures, algorithms, software design, and IT project management. I have also gained valuable experience in applying these concepts to real-world projects through coursework assignments. </p>



        <h2 className={styles.sectionHeadText}> Project Experience</h2>
        
        <p className={styles.sectionSubText}>My programming skills encompass both backend and frontend development. I am proficient in Python and have a strong understanding of abstract data structures. I have used these skills to develop a variety of backend applications, including implementing simple API's and data analysis techniques tools. I am also comfortable with web development frameworks such as ReactJS and Django. My experience with HTML, CSS, and JavaScript has enabled me to create user-friendly and visually appealing web interfaces. </p>
        <p className={styles.sectionSubText}>I am a passionate and self-motivated learner who is always eager to expand my knowledge and skills. I have actively pursued opportunities to learn new frameworks and technologies outside of the classroom. For instance, I have taught myself BootstrapCSS and ThreeJS, both of which have proven to be valuable tools in my web development projects. My ability to learn independently and adapt to new technologies has been important in my success as a software developer. </p>


      </motion.div>
    </div>
  );
};

export default Experience;

