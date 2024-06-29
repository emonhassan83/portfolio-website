import "./App.css";
import DarkAndLightToggle from "./components/DarkLightToogle/DarkAndLightToggle";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import { ThemeProvider } from "./components/ThemePrvider/ThemeProvider";
import HomePage from "./page/Home/Home";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="main">
        <HomePage/>
      </main>
      <Footer />
      <ScrollUp />
      <DarkAndLightToggle/>
    </ThemeProvider>
  );
}

export default App;
