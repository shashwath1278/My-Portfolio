import React, { useState, useEffect } from 'react';
import './Typetext.css'; 
import { useTheme } from '../Themecontext';


const Type = () => {
  const texts = ["Hello I'm Shashwath Prabhu", "Hello I'm Shashwath Prabhu", "Hello I'm Shashwath Prabhu"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1); // Start the typing from the first character
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }

      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length); // Loop through the texts array
      }
    }, 80);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);
const { theme } = useTheme();
  return (
    <div className={`type-text ${theme === 'dark' ? 'dark' : ''}`}>
      <div className={`type-text ${theme === 'dark' ? 'dark' : ''}`}>{currentText}</div>
      <p>A second year undergrad at MSRIT, currently learning front-end dev and ethical hacking.</p>
    </div>
  );
};

export default Type;
