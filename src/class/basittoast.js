import {
  success as Success,
  warning as Warning,
  errors as Errors,
  defaults as Defaults,
} from "../core/index";

class BasitToast {
  constructor(success, warning, errors, defaults) {
    this.success = Success;
    this.warning = Warning;
    this.errors = Errors;
    this.defaults = Defaults;
  }
}

export const basittoast = new BasitToast();
