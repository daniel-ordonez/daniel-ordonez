import { writable } from "svelte/store";
import { SystemColorsSchemeTracker } from "./utils.mjs";

export const theme = writable("");
export const systemColor = writable("light");

// Trahcks when the system theme changes
const systemColorTracker = new SystemColorsSchemeTracker((theme) => {
  systemColor.set(theme);
});
