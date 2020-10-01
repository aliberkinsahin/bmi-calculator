import React, { useEffect, useState } from "react";
import BMIChart from "../BMI_chart.svg";
import { motion } from "framer-motion";

const infoVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -200 },
};

const calculationVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 200 },
};

export default function Main() {
  const [bmiCalculated, setBmiCalculated] = useState(false);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [bmiText, setBmiText] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    let bmiCalc = (weight / (height * height)) * 10000;
    if (height === 0) {
      bmiCalc = 0;
    }
    setBmi(bmiCalc.toFixed(2));
    setBmiCalculated(true);
  };

  const checkBmiText = (bmi) => {
    if (bmi < 18.5) {
      setBmiText("Underweight");
    } else if ((bmi > 18.5) & (bmi <= 25.0)) {
      setBmiText("Normal Weight");
    } else if ((bmi > 25.0) & (bmi <= 30.0)) {
      setBmiText("Overweight");
    } else if (bmi > 30) {
      setBmiText("Obese");
    } else {
      setBmiText("");
    }
  };

  const updateWeight = (value) => {
    setWeight(value);
  };
  const updateHeight = (value) => {
    setHeight(value);
  };

  useEffect(() => {
    checkBmiText(bmi);
  }, [bmi]);

  return (
    <div className="App">
      <motion.div
        variants={infoVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
        className="Info"
      >
        <h2>What is BMI?</h2>
        <p>
          <b>Body mass index</b> (BMI) is a value derived from the mass (weight)
          and height of a person. The BMI is defined as the body mass divided by
          the square of the body height, and is universally expressed in units
          of kg/m^2, resulting from mass in kilograms and height in metres.
        </p>
        <hr />
        <form className="InputArea">
          <div className="Weight">
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => updateWeight(e.target.value)}
            />
            <label htmlFor="weight"> = Weight (kg)</label>
          </div>

          <div className="Height">
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => updateHeight(e.target.value)}
            />
            <label htmlFor="height"> = Height (cm) </label>
          </div>
          <div className="ButtonContainer">
            <button
              type="submit"
              className="Button"
              onClick={(e) => calculateBMI(e)}
            >
              Calculate BMI
            </button>
          </div>
        </form>
        <hr />
      </motion.div>

      {bmiCalculated ? (
        <motion.div
          variants={calculationVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.75 }}
          className="Graph"
        >
          <label htmlFor="bmi">BMI: {bmi}</label>
          <b>
            <label htmlFor="bmi">({bmiText})</label>
          </b>
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
          <div className="SocialMedia">
            <a
              href="https://github.com/aliberkinsahin"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-github-square fa-3x"></i>
            </a>
            <a
              href="https://www.reddit.com/user/_ambitiousSloth"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-reddit-square fa-3x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ali-berkin-sahin/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}
