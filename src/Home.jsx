import Navbar from "./components/header/Navbar";
import Summary from "./components/summary/Summary";
import Hero from "./components/hero/Hero";
const Home = () => {
  return (
    <div className="body">
      <Navbar />
      <Summary />
      <Hero />
    </div>
  );
};

export default Home;
