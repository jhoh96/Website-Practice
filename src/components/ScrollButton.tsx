import React, { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import * as Scroll from "react-scroll";
import { motion, Variants } from "framer-motion";

import "./componentStyle.css";
const scroll = Scroll.animateScroll;

// Exporting all components as functions instead of class
export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <motion.div
      whileHover={{
        scale: 1.5,
      }}
      className="to-top-button"
    >
      <IconButton
        icon={<ArrowUpIcon />}
        onClick={scrollToTop}
        aria-label="Scroll to Top"
        variant="outline"
        // ? toggle
        style={{ display: visible ? "inline" : "none" }}
      ></IconButton>
    </motion.div>
  );
}
