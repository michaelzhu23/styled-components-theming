import React from "react";
import styled from "styled-components";
import theme from "styled-theming";

const ButtonVariants = () => {
  return (
    <div>
      <Button />
      <Button variant="primary" />
      <Button variant="success" />
      <Button variant="warning" />
    </div>
  );
};

const backgroundColor = theme.variants("mode", "variant", {
  default: { light: "gray", dark: "darkgray" },
  primary: { light: "blue", dark: "darkblue" },
  success: { light: "green", dark: "darkgreen" },
  warning: { light: "orange", dark: "white" },
});

const size = theme.variants("size", "variant", {
  default: { normal: "100px", small: "80px" },
  primary: { normal: "120px", small: "100px" },
  success: { normal: "150px", small: "120px" },
  warning: { normal: "180px", small: "150px" },
});

const Button = styled.button`
  background-color: ${backgroundColor};
  width: ${size};
  height: 100px;
`;

Button.defaultProps = {
  variant: "default",
};

export default ButtonVariants;
