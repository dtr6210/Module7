import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BitcoinRates from "./components/BitcoinRates";
import { MoodProvider } from "./context/MoodContext";
import Emoji from "./components/Emoji";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MoodProvider>
        <BitcoinRates />
        <Emoji />
      </MoodProvider>
    </>
  );
}

export default App;
