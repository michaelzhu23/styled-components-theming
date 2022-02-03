import logo from './logo.svg';
import './App.css';
import ButtonVariants from "./components/ButtonVariants";
import { StyledThemingButton } from "./components/StyledThemingButton";
import { ThemeObjectButton } from "./components/ThemeObjectButton";

function App() {
  return (
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
      </header>
    </div>
  );
}

export default App;
