import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./layouts/Layout";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";

import "./index.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="checkout" element={<Checkout />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
