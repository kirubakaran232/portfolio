import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-black">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute left-[-12%] top-[8%] h-[34rem] w-[34rem] rounded-full bg-[#dc2626]/10 blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-[#f87171]/10 blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#fff_65%,transparent_100%)]"></div>
      </div>

      <div className="relative">
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
