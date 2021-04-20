import React from "react";
import { render } from "react-dom";
import { InfoIcon } from "../icons";

const containerDOM = document.createElement("div");

export const info = (message, position, delay = 3000) => {
  /**
   * append child basit-toast
   */

  document.body.appendChild(containerDOM);

  render(
    <div
      className={`basit-toast basit-toast__info basit-toast__${position} show`}
    >
      <InfoIcon />

      <p className="basit-toast-title">
        {message.length > 25 ? `${message.substr(0, 25)}...` : message}
      </p>
    </div>,
    containerDOM
  );

  /**
   * delay for remove child basit-toast
   */

  setTimeout(() => {
    document.body.removeChild(containerDOM);
  }, delay);
};
