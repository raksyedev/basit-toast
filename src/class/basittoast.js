import {
  success as Success,
  warning as Warning,
  errors as Errors,
  defaults as Defaults,
  info as Info,
} from "../core/index";

class BasitToast {
  constructor(success, warning, errors, info, defaults) {
    this.success = Success;
    this.warning = Warning;
    this.errors = Errors;
    this.defaults = Defaults;
    this.info = Info;
  }
}

export const basittoast = new BasitToast();
