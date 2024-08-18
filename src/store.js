import { writable } from "svelte/store";
import { SystemColorsSchemeTracker } from "./utils.mjs";

/**
 * TODO: save/load theme from localstore
 */

export const theme = writable("");
export const systemColor = writable("light");
export const supportsHover = writable(false);

// Trahcks when the system theme changes
const systemColorTracker = new SystemColorsSchemeTracker((theme) => {
  systemColor.set(theme);
});
