import { success, warning, errors, defaults, info } from "../core/index";

const useBasitToast = () => {
  return {
    success,
    warning,
    errors,
    defaults,
    info,
  };
};

export default useBasitToast;