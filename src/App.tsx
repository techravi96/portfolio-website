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
     <div className='MainWrapper w-full bg-[#0a0a0a] min-h-screen'>
       <Navbar/> 
       <Banner/>
       <About/>
       <Skills/>
       <Portfolio/> 
       <Experience/> 
       <Contact/>
     </div>
    </>
  )
}

export default App
