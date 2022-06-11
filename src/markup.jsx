import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./pages/home";
import Services from "./pages/services";

export default function Markup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}/>
        <Route index element={<Home/>} />
		<Route path="services" element={<Services/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Markup />);