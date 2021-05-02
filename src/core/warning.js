import React from "react";
import ReactDOM from 'react-dom'
import { WarningIcon } from "../icons";

const containerDOM = document.createElement("div");

export const warning = (message, position, delay = 3000) => {
  /**
   * append child basit-toast
   */

  document.body.appendChild(containerDOM);

  ReactDOM.render(
    <div
      className={`basit-toast basit-toast__warning basit-toast__${position} show`}
    >
      <WarningIcon />

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
