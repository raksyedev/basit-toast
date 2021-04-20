import React from "react";
import useBasitToast from "../hooks/useBasitToast";

const ExampleUseBasitToast = () => {
  const { defaults } = useBasitToast();

  const handleClick = () => {
    defaults("Hallo", "bottomcenter");
  };

  return <button onClick={handleClick}>click</button>;
};

export default ExampleUseBasitToast;
