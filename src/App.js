import React, { useRef, useState } from 'react';
import './App.css';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Scrollbar from './components/Scrollbar';
import Skills from './components/Skills';

function App() {
  const home = useRef()
  const skill = useRef()
  const project = useRef()
  const exp = useRef()
  const footer = useRef()
  const[id,setId] = useState(0)
  return (
    <React.StrictMode>
      <Navbar home={home} skill={skill} project={project} exp={exp} footer={footer}></Navbar>
      <div className="container">
        <Home home={home}></Home>
        <Skills skill={skill}></Skills>
        <Projects project={project}></Projects>
        <Experience exp={exp}></Experience>
        <Footer footer={footer}></Footer>
        <Scrollbar id={id} setId={setId} home={home} skill={skill} project={project} exp={exp} footer={footer}></Scrollbar>
      </div>
    </React.StrictMode>
  );
}

export default App;
