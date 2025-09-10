import * as React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Header />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
