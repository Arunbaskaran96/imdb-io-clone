import React from "react";
import Signin from "./Pages/signin/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Topbar from "./compoenets/topbar/Topbar";
import Actors from "./Pages/actor/Actors";
import Movies from "./Pages/movies/Movies";
import Producers from "./Pages/producers/Producers";
import { ThemeProvider } from "./context/themeContext";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route element={<Topbar />} />
          <Route path="/home" element={<Home />}>
            <Route path="actors" element={<Actors />} />
            <Route path="movies" element={<Movies />} />
            <Route path="producers" element={<Producers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
