import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BitcoinRates from "./components/BitcoinRates";
import { MoodProvider } from "./context/MoodContext";
import Emoji from "./components/Emoji";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MoodProvider>
        <NavBar />
        <AppRoutes />
        {/* <BitcoinRates />
        <Emoji /> */}
      </MoodProvider>
    </>
  );
}

export default App;
