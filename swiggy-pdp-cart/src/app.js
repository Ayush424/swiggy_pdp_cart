import Header from "./components/header";
import Main from "./components//main";
import Footer from "./components//footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components//homepage";
import { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    const url = "http://localhost:8080/user";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJson) => {
        const name = responseJson.firstName + " " + responseJson.lastName;
        setName(name);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <BrowserRouter>
      <Header userName={name} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/restaurant/:name" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
