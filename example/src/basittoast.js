import React from "react";
import { basittoast } from "basit-toast";

const ExampleBasitToast = () => {
  const handleClick = () => {
    basittoast.info("HELLO", "bottomcenter", 3000);
  };

  return <button onClick={handleClick}>click</button>;
};

export default ExampleBasitToast;
