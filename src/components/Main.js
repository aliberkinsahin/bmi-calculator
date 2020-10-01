import React from "react";
import BMIChart from "../BMI_chart.svg";
import { motion } from "framer-motion";

const infoVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -200 },
};

export default function Main() {
  return (
    <div className="App">
      <motion.div
        variants={infoVariants}
        initial="hidden"
        animate="visible"
        className="Info"
      >
        <h2>What is BMI?</h2>
        <p>
          <b>Body mass index</b> (BMI) is a value derived from the mass (weight)
          and height of a person. The BMI is defined as the body mass divided by
          the square of the body height, and is universally expressed in units
          of kg/m^2, resulting from mass in kilograms and height in metres.
        </p>
      </motion.div>

      <div className="ButtonContainer">
        <button className="Button">Calculate BMI</button>
      </div>

      <div className="Graph">
        <img className="Chart" src={BMIChart} alt="BMI Chart" />
        <p>
          More information on{" "}
          <a
            href="https://en.wikipedia.org/wiki/Body_mass_index"
            rel="noopener noreferrer"
            target="_blank"
          >
            Wikipedia
          </a>
        </p>
      </div>
    </div>
  );
}
