import React from "react";
import { render } from "react-dom";
import { ErrorsIcon } from "../icons";

const containerDOM = document.createElement("div");

export const errors = (message, position, delay = 3000) => {
  /**
   * append child basit-toast
   */

  document.body.appendChild(containerDOM);

  render(
    <div
      className={`basit-toast basit-toast__errors basit-toast__${position} show`}
    >
      <ErrorsIcon />

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
