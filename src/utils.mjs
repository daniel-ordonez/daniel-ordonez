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
