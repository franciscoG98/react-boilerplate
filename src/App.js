import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>App works!</h1>
      <hr />
      <Router>
        <Routes>
          <Route path="/about" element={"Esta es la pagina de nosotros"} />
          <Route exact path="/" element={"Homesick :/"} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
