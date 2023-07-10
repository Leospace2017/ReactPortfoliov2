import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../data";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-center font-bold text-white">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="about">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 0.1)} className="p-4 tracking-widest text-center">
        Bis 7Monate Erfahrung in der Webentwicklung habe ich
        ein grundlegendes Verständnis von HTML, CSS und JavaScript erworben. Ich
        habe mich hauptsächlich auf die Entwicklung von Webanwendungen mit React
        konzentriert, da dies eines der beliebtesten JavaScript-Frameworks ist.
        
        <br />
        Meine Kenntnisse in React ermöglichen es mir, ansprechende und
        interaktive Benutzeroberflächen zu erstellen. Ich kann Komponenten
        entwickeln und diese in einer hierarchischen Struktur organisieren, um
        komplexe Anwendungen zu erstellen. Auch die Arbeit mit State
        Management-Bibliotheken ist mir bekannt. 
        <br />
        
        Obwohl ich noch nicht über umfangreiche Backend-Erfahrung verfüge, habe ich
        begonnen, Node.js zu lernen, um meine Fähigkeiten als Fullstack
        Developer zu erweitern. Ich habe grundlegende Kenntnisse in der
        Erstellung von RESTful APIs mit Express.js erworben und die Integration
        von Datenbanken wie MongoDB begonnen. 
        <br />
        
        Meine Erfahrungen im Content Creation-Bereich sind zwar begrenzt, aber ich bin bereit, meine
        Kenntnisse zu vertiefen und mich weiterzuentwickeln. Ich bin motiviert,
        technische Konzepte zu verstehen. 
        <br />
        
        Zusammenfassend bin ich ein aufstrebender Fullstack Developer mit Grundkenntnissen in
        HTML, CSS, JavaScript, React und Node.js. Ich lerne weiterhin aktiv und
        plane, meine Fähigkeiten in den kommenden Jahre weiter auszubauen. Meine Lieblingsframeworks 
        die ich bisher ausprobiert habe, sind Sass Tailwindcss für css und FramerMotion fürs React.
        In Zukunft , wenn ich damit soweit bin, werde ich auch langsam mit Typescript Next.js Jest/Vitest und Three.js befassen.
        Ich bin bereit, an spannenden Projekten mitzuarbeiten und von erfahrenen
        Entwicklern zu lernen. Ich schätze die Gelegenheit, mich
        weiterzuentwickeln und meine Fähigkeiten als Fullstack Developer zu
        erweitern.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
