import { success, warning, errors, defaults, info } from "../core/index";

export const useBasitToast = () => {
  return {
    success,
    warning,
    errors,
    defaults,
    info,
  };
};