// @ts-nocheck
export class SystemColorsSchemeTracker {
  constructor(callback, base = "light") {
    const opposite = {
      dark: "light",
      light: "dark",
    };
    // Setup default theme to check light/dark
    if (!Object.keys(opposite).includes(base)) base = "light";

    // Update value to current theme
    const query = window.matchMedia(`(prefers-color-scheme: ${base})`);
    if (!query.matches) this.value = opposite[base];
    else this.value = base;

    callback(this.value);

    // Listen to theme changes
    query.addEventListener("change", ({ matches }) => {
      this.value = matches ? base : opposite[base];
      if (callback && typeof callback === "function") callback(this.value);
    });
  }
  toString() {
    return this.value;
  }
}

export const hideElements = (ids) => {
  const els = [];
  for (const id of ids) {
    const el = document.getElementById(id);
    el.classList.add("hidden");
    els.push(el);
  }
  return els;
};
export const unhideElements = (ids) => {
  const els = [];
  for (const id of ids) {
    const el = document.getElementById(id);
    el.classList.remove("hidden");
    els.push(el);
  }
  return els;
};

/**
 * FORMS AND INPUTS
 */

const emailRegex = /^[a-zA-Z0-9._%+-]+@{1}[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const isValidEmail = (str) => {
  return emailRegex.test(str);
};

export class FormManager {
  constructor(form, onValidityCheck) {
    this.form = form;
    this.onValidityCheck = onValidityCheck;

    // Keep track of inputs
    const inputElements = Array.from(
      this.form.querySelectorAll("input, textarea")
    ).filter((input) => input.type !== "hidden");
    const inputsMap = new Map();
    const validInputs = new Set();
    const validityReports = new Map();
    const validationLabels = new Map();

    const checkValidity = () => inputsMap.size == validInputs.size;

    const updateValidationLabel = (name, label) => {
      if (validationLabels.has(name)) {
        const el = validationLabels.get(name);
        el.innerText = label;
        if (label) {
          el.classList.add("show");
        } else {
          el.classList.remove("show");
        }
      }
    };

    const validateInput = (input, name, validityErrors) => {
      let error = false;
      // look for errors
      for (const f of validityErrors) {
        error = f(input);
        if (error) {
          break;
        }
      }
      if (error) {
        validInputs.delete(name);
        if (typeof error == "string") {
          validityReports.set(name, error);
        } else {
          validityReports.delete(name);
          input.setCustomValidity("");
        }
        if (input.dataset.validated) {
          updateValidationLabel(name, input.validationMessage);
        }
      } else {
        validInputs.add(name);
        validityReports.delete(name);
        input.setCustomValidity("");
        if (input.dataset.validated) {
          updateValidationLabel(name, "");
        }
      }
      this.updateSubmitability();
    };

    this.inputsMap = inputsMap;
    this.validInputs = validInputs;
    this.lastStatus = null;

    // validators
    const customValidatorRequired =
      (msg) =>
      ({ value }) =>
        !value ? msg : false;
    const defaultValidatorRequired = customValidatorRequired(
      "Fill out this field."
    );
    const defaultValidatorEmail = ({ value }) =>
      !emailRegex.test(value) ? "This email seems wrong." : false;
    const customValidatorMinLength =
      (minlength) =>
      ({ value }) => {
        const length = value.toString().length;
        return length < minlength
          ? `Don't be shy! Write at least ${
              minlength - length
            } more characters.`
          : false;
      };

    // Validate each input when their value changes
    for (const input of inputElements) {
      // Register input name
      const name = input.getAttribute("name");
      inputsMap.set(name, input);

      // Register validation label
      const inputValidationLabel = form.querySelector(
        `.validity-message[data-for="${name}"]`
      );
      if (inputValidationLabel)
        validationLabels.set(name, inputValidationLabel);

      // falsy value means no error founds
      const validityErrors = [];
      if (input.hasAttribute("required")) {
        const msg = input.dataset.requiredMsg;
        validityErrors.push(
          msg ? customValidatorRequired(msg) : defaultValidatorRequired
        );
      }
      if (input.dataset.minlength) {
        const minLength = parseInt(input.dataset.minlength);
        validityErrors.push(customValidatorMinLength(minLength));
      }
      if (input.getAttribute("type") === "email") {
        validityErrors.push(defaultValidatorEmail);
      }
      // append default validation
      validityErrors.push((input) => !input.checkValidity());

      // validate function for this input
      const validate = () => validateInput(input, name, validityErrors);

      input.addEventListener("input", validate);
      input.addEventListener("focus", validate);

      // validate input after changes
      input.addEventListener("blur", () => {
        // if exit input with invalid value
        if (!validInputs.has(name)) {
          if (validityReports.has(name)) {
            input.setCustomValidity(validityReports.get(name));
          }
          input.checkValidity();
          input.dataset.validated = true;
          updateValidationLabel(name, input.validationMessage);
        } else {
          updateValidationLabel(name, "");
          delete input.dataset.validated;
        }
      });
    }
    this.checkValidity = checkValidity;

    // Validate form to enable submit
    this.updateSubmitability();
  }
  inputsStatusChanged() {
    if (this.lastStatus) {
      const changed =
        this.validInputs.difference(this.lastStatus).size ||
        this.lastStatus.difference(this.validInputs).size;
      if (changed) {
        this.lastStatus = new Set(this.validInputs);
      }
      return changed;
    } else {
      this.lastStatus = new Set(this.validInputs);
      return true;
    }
  }
  updateSubmitability() {
    if (this.onValidityCheck && this.inputsStatusChanged()) {
      this.onValidityCheck({
        valid: this.checkValidity(),
        inputs: this.inputsMap.size,
        validInputs: this.validInputs.size,
      });
    }
  }
}
