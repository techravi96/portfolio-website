import Navbar from './components/homepage/Navbar';
import Banner from './components/homepage/Banner';
import About from './components/homepage/About';
import Skills from './components/homepage/Skills';
import Portfolio from './components/homepage/Portfolio';
import Experience from './components/homepage/Experience';
import Contact from './components/homepage/Contact';
function App() {
  return (
    <>
      <div className="MainWrapper w-full bg-[#0a0a0a] min-h-screen">
        <header>
          <Navbar />
        </header>
        <main>
          <Banner />
          <About />
          <Skills />
          <Portfolio />
          <Experience />
          <Contact />
        </main>
        <footer className="w-full bg-[#0a0a0a] border-t border-white/5 py-6 px-6 md:px-10 lg:px-16">
          <div className="max-w-[1300px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[#00D4FF] font-black text-xl font-display">
              RK.
            </span>
            <p className="text-white/20 text-xs font-mono tracking-[0.15em]">
              © {new Date().getFullYear()} Ravi Kumar. ALL RIGHTS RESERVED.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App
