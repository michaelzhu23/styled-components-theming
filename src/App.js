import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import theme from "styled-theming";
import { ThemeProvider } from "styled-components";
import ButtonVariants from "./components/ButtonVariants";
import { StyledThemingButton } from "./components/StyledThemingButton";
import { ThemeObjectButton } from "./components/ThemeObjectButton";
import { Button } from "semantic-ui-react";
import { useFlags } from "launchdarkly-react-client-sdk";

function App() {
  const { newColorScheme } = useFlags();

  return (
    <ThemeProvider
      theme={{ mode: newColorScheme ? "dark" : "light", size: "normal" }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <StyledThemingButton />
          <ButtonVariants />
          <ThemeObjectButton />
          <StyledSemanticButton>Semantic UI Button</StyledSemanticButton>
        </header>
      </div>
    </ThemeProvider>
  );
}

const backgroundColor = theme("mode", {
  light: "yellow",
  dark: "limegreen",
});

const width = theme("mode", {
  light: "300px",
  dark: "500px",
});

const StyledSemanticButton = styled(Button)`
  &&& {
    background-color: ${backgroundColor};
  }
  width: ${width};
  height: 50px;
`;

export default App;
