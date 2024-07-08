export const animations = {
  shake: {
    transform: [
      "translateX(-1px)",
      "translateX(2px)",
      "translateX(-4px)",
      "translateX(4px)",
      "translateX(-4px)",
      "translateX(4px)",
      "translateX(-4px)",
      "translateX(2px)",
      "translateX(-1px)",
      "translateX(0px)",
    ],
  },
};

const emailRegex = /^[a-zA-Z0-9._%+-]+@{1}[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const isValidEmail = (str) => {
  return emailRegex.test(str);
};
const setInputValid = (input) => {
  const label = input.closest("label");
  label?.removeAttribute("invalid");
  input.setCustomValidity("");
};
const setInputInvalid = (input) => {
  const label = input.closest("label");
  label?.setAttribute("invalid", "");
  console.log(input.validity);
  if (input.validity.valueMissing) {
    input.setCustomValidity("Please fill out this field");
  }
  const clearError = () => {
    setInputValid(input);
    input.removeEventListener("input", clearError);
  };
  input.addEventListener("input", clearError);
};
export const validateFormInputs = (form) => {
  // Check inputs inside form
  const inputs = Array.from(form.querySelectorAll("input, textarea"));
  const invalidInputs = [];
  inputs.map((input) => {
    if (input.getAttribute("type") === "email") {
      if (!isValidEmail(input.value)) {
        input.setCustomValidity("Invalid email");
      }
    }
    const valid = input.checkValidity();
    if (valid) {
      setInputValid(input);
    } else {
      setInputInvalid(input);
      invalidInputs.push(input);
    }
  });
  return invalidInputs;
};
