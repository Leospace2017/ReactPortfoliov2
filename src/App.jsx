import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"></div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <div>
      <Experience />
      <StarsCanvas />
      </div>
      <Works />
      <div>
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
