import styled from "styled-components";
import theme from "styled-theming";

const backgroundColor = theme("mode", {
  light: "lavender",
  dark: "hotPink",
});

export const StyledThemingButton = styled.button`
  background-color: ${backgroundColor};
  width: 200px;
  height: 100px;
`;
