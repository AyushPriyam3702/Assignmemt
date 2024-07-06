//import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Service } from "./pages/Service";
import { Feature } from "./pages/Feature";
import { Product } from "./pages/Product";
import { Testimonial } from "./pages/Testimonial";
import { FAQ } from "./pages/FAQ";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/product" element={<Product />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
