import "./App.css";
import Navbar from "./components/Navbar";
import DarkModeSection from "./components/DarkModeSection";
import EarlyWebSection from "./components/EarlyWebSection";
import FlatDesignSection from "./components/FlatDesignSection";
import NeumorphismSection from "./components/NeumorphismSection";
import SkeuomorphismSection from "./components/SkeuomorphismSection";

function App() {
  return (
    <>
      <Navbar />
      <EarlyWebSection />
      <SkeuomorphismSection />
      <FlatDesignSection />
      <DarkModeSection />
      <NeumorphismSection />
    </>
  );
}

export default App;
