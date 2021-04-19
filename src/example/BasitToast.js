import React, { useState } from "react";
import BasitToast from "../components/basitToastComponent";

const ExampleBasitToast = () => {
  const [openToast, setOpenToast] = useState(false);

  const handleClick = () => {
    setOpenToast(true);
  };

  return (
    <>
      <BasitToast
        handleClose={() => setOpenToast(false)}
        position="topcenter"
        isOpen={openToast}
        severity="errors"
        message="Your errors toast here !"
      />
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default ExampleBasitToast;
