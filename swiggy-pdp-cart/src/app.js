import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/restaurant/:name" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
