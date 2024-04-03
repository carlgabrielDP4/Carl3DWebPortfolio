
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}> About Me </h2>

        <p className={styles.sectionSubText}>
        In the boundless realm of the digital world, my creativity flourishes as I weave aesthetics and functionality into websites and applications. The art of crafting visually stunning interfaces, complete with sleek transitions and immersive 3D models, captivates me as much as the logical elegance of backend development. Delving into APIs and unraveling the complexities of sports data analytics is a quest that keeps my mind engaged and ever-curious. As I navigate this digital landscape, I find myself drawn to the prospect of becoming a full-stack developer, though I am still experimenting and discovering my path. Each line of code I write, every project I embark upon, is a step in an evolving journey that parallels the unpredictability and excitement of catching the perfect wave. In this intricate tapestry of technology, my life is illuminated not just by the glow of screens but by the sparks of innovation and exploration. 
          <br />
          <br />
          If I'm not surfing the web, tackling the challenges of coding and data analytics, I am likely nearby the sandbar surfing barrels with friends. The ocean is my retreat, where I find peace and rejuvenation amidst the waves.
          <br />
          <br />
          Sports and fitness take center stage in my life, away from the surf and the screen. As a lifelong FC Barcelona supporter, I am captivated by their finesse on the football field. This enthusiasm for sports extends to basketball, where the Sacramento Kings' scoring pace and team chemistry resonate with how I like to play in the real world. These sports not only fuel my spirit but also infuse energy into my professional and personal pursuits.
          <br />
          <br />
          During the off-season, my focus shifts to maintaining a healthy lifestyle, and the gym becomes a cornerstone of this routine. It's more than just fitness; it's about keeping my mind and body in peak condition to tackle the technicalities of code debugging, data and stock market analytics.
          <br />
          <br />
          Yet, nothing rivals the call of the ocean. Surfing becomes my escape from the lingering disappointment of a sports loss or the hunt for a missing semicolon in a stubbornly bugged program. With just me, my surfboard and a few close friends, the satisfaction of catching a wave reminds me there's a world beyond just a computer screen.
          <br />
          <br />
          As a student, I am continually expanding my areas of interest by self-learning outside my Educational Institution. Such as growing interest in stock market and blockchain investing and exploring ways to make Decision Support Systems relating to my interests that could potentially leave a positive impact in the world
        </p>
      </motion.div>
    </div>
  );
};

export default About;


