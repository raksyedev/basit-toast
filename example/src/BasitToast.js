import React, { useState } from "react";
import BasitToast from "basit-toast";

const ExampleBasitToast = () => {
  const [openToast, setOpenToast] = useState(false);

  const handleClick = () => {
    setOpenToast(true);
  };

  return (
    <>
      <BasitToast
        isOpen={openToast}
        handleClose={() => setOpenToast(false)}
        position="bottomcenter"
        severity="errors"
        message="Your errors toast here !"
      />
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default ExampleBasitToast;
