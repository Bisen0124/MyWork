import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Componenet/Layout";


import Home from "./Componenet/Home";
import About from "./Componenet/About";
import Service from "./Componenet/Service";
import Portfolio from "./Componenet/Portfolio";
import Contact from "./Componenet/Contact";



import './Componenet/CSS/Main.css'

export default function App() {
  return (
    <div className="main-wrapper">
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Service" element={<Service />} />
            <Route path="Portfolio" element={<Portfolio />} />
            <Route path="Contact" element={<Contact />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);