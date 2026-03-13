import React from 'react';
import Nav from './pages/Nav';
import Home from './pages/Home';
import About from './pages/About'; // We will merge Skills into About to match reference
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="min-h-screen bg-rose-50/50 text-slate-800 font-sans selection:bg-rose-200">
      <Nav />
      <main className="pt-24 pb-12 px-6 max-w-6xl mx-auto">
        <Home />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
