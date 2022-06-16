import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./pages/service";

import Navbar from "./Navbar";
import Home from "./pages/home";
import Services from "./pages/services";
import News from "./pages/news";
import Contact from "./pages/contact";

export default function Markup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}/>
        <Route index element={<Home/>} />
		    <Route path="services" element={<Services/>} />
		    <Route path="service" element={<Service/>} />
		    <Route path="news" element={<News/>} />
		    <Route path="contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

