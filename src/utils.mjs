export class SystemColorsSchemeTracker {
  constructor(callback, base = "light") {
    const opposite = {
      dark: "light",
      light: "dark",
    };
    if (!Object.keys(opposite).includes(base)) base = "light";
    window
      .matchMedia(`(prefers-color-scheme: ${base})`)
      .addEventListener("change", ({ matches }) => {
        this.value = matches ? base : opposite[base];
        if (callback && typeof callback === "function") callback(this.value);
      });
    this.value = base;
  }
  toString() {
    return this.value;
  }
}
