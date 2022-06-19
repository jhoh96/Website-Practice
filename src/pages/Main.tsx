import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "../pages/Header.tsx";
import About from "../pages/About.tsx";
import Blog from "../pages/Blog.tsx";
import Navigation from "../components/Navigation.tsx";
import Skills from "../pages/Skills.tsx";
import Contact from "../pages/Contact.tsx";
import ScrollButton from "../components/ScrollButton.tsx";
import { Divider, Center } from "@chakra-ui/react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

import "./style.css";

const FadeInWhenVisible = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { x: 0},
        hidden: { x: -1000},
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Main() {
  return (
    <div>
      <Navigation className="nav-bar" />
      <Element name="home">
        <Header />
      </Element>
      <ScrollButton />

      {/* <FadeInWhenVisible> */}
        <Element className="skills-and-about" name="skills">
          <Skills />
        </Element>
      {/* </FadeInWhenVisible> */}
      {/* <FadeInWhenVisible> */}
        <Element name="blog">
          <Blog />
        </Element>
      {/* // </FadeInWhenVisible> */}
      {/* <FadeInWhenVisible> */}
        <Element name="contact">
          <Contact />
        </Element>
      {/* // </FadeInWhenVisible> */}
    </div>
  );
}
