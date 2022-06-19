import React from "react";
import { motion } from "framer-motion";

const lines = [
  {
    line: "Hello!",
  },
  {
    line: "I am Justin!",
  },
  {
    line: "A Programmer, Information Systems Operator, Translator, and many more...",
  },
  {
    line: ".....",
  },
];

const sentence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.05,
      staggerChildren: 0.02,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
  
};

const letter = {
  hidden: {
    opacity: 0,
    y: "1rem",
  },
  visible: {
    opacity: 1,
    y: "0rem",
  },
};

export default function TextAnimation() {
  return (
    <motion.h1  variants={sentence} initial="hidden" animate={"visible"}>
      {lines[0].line.split("").map((char, index) => {
        return (
          <motion.span
            style={{ fontSize: 60 }}
            key={char + "-" + index}
            variants={letter}
          >
            {char}
          </motion.span>
        );
      })}
      <br />
      {lines[1].line.split("").map((char, index) => {
        return (
          <motion.span
            style={{ fontSize: 20 }}
            key={char + "-" + index}
            variants={letter}
          >
            {char}
          </motion.span>
        );
      })}
      <br />

      {lines[2].line.split("").map((char, index) => {
        return (
          <motion.span
            style={{ fontSize: 20 }}
            key={char + "-" + index}
            variants={letter}
          >
            {char}
          </motion.span>
        );
      })}
      <br />
    </motion.h1>
  );
}
