import React, { useEffect } from "react";
import { SuccessIcon, WarningIcon, ErrorsIcon, DefaultIcon } from "../icons";
import { SUCCESS, DEFAULT, WARNING, ERRORS } from "../type/index";
import PropTypes from "prop-types";

export const BasitToast = ({
  isOpen,
  severity = "default",
  position = "bottomcenter",
  message,
  handleClose,
  handleCloseDuration = 3000,
}) => {
  useEffect(() => {
    if (isOpen) {
      setTimeout(handleClose, handleCloseDuration);
    }
  }, [isOpen, handleClose]);

  return (
    <div
      className={`basit-toast basit-toast__${severity} basit-toast__${position} ${
        isOpen ? "show" : ""
      }`}
    >
      {severity === DEFAULT && <DefaultIcon />}
      {severity === SUCCESS && <SuccessIcon />}
      {severity === WARNING && <WarningIcon />}
      {severity === ERRORS && <ErrorsIcon />}

      <p className="basit-toast-title">
        {message.length > 25 ? `${message.substr(0, 25)}...` : message}
      </p>
    </div>
  );
};

BasitToast.propTypes = {
  /**
   * The boolean for visible toast
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * Severity type for toast
   */
  severity: PropTypes.oneOf(["default", "success", "warning", "errors", "info"])
    .isRequired,
  /**
   * position toast if show
   */
  position: PropTypes.oneOf([
    "topright",
    "topleft",
    "topcenter",
    "bottomright",
    "bottomleft",
    "bottomcenter",
  ]).isRequired,
  /**
   * message in toast
   */
  message: PropTypes.string.isRequired,

  /**
   * handleClose
   */
  handleClose: PropTypes.func.isRequired,

  /**
   * handleCloseDuration time
   */
  handleCloseDuration: PropTypes.number,
};
