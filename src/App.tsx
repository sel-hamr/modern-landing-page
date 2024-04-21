import ButtonGradient from "./assets/svg/ButtonGradient";
// import Benefits from "./components/sections/Benefits";
import Collaboration from "./components/sections/Collaboration";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Benefits from "./components/sections/Benefits";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
