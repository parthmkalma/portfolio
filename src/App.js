import Herosection from "./Components/Herosection";
import Navbar from "./Components/Navbar";
import SkillSection from "./Components/SkillSection";
// import ParticleBg from "./Components/ParticalBg";

function App() {
  return (
    <div className="App bg-[#ECF0F3]">
      <Navbar />
      {/* <ParticleBg/> */}
      <Herosection />
      <SkillSection/>
    </div>
  );
}

export default App;
