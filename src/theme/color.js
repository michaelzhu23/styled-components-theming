import theme from "styled-theming";

export const color = {
  core: {
    primary: theme("mode", {
      light: "black",
      dark: "white",
    }),
    secondary: theme("mode", {
      light: "purple",
      dark: "orange",
    }),
  },
  brand: {
    charcoal: "#161616",
    gold: "#ffc857",
    onyx: "#05212f",
    orange: "#d45f37",
  },
};
