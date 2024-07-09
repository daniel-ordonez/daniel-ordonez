import { readable, writable } from "svelte/store";
import { SystemColorsSchemeTracker } from "./utils.mjs";

export const theme = writable("");
export const colorScheme = writable("light");
// Trahcks when the system theme changes, not trigger until change happens
const systemColor = new SystemColorsSchemeTracker((theme) => {
  colorScheme.set(theme);
});
