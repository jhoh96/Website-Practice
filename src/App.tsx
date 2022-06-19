// import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main.tsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <div className="navigation-bar">

      * This for using default routing within the APP file using react-router-dom      

        <Nav />
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skills" element={<Skills />} />
        </Routes>
      </div> */}
      <Main />
      {/* <Skills className='skills' id='skills'/>
        <About className='about' id='about'/> */}
    </div>
  );
}

export default App;
