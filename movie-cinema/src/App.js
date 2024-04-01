import { Component } from "react";
import Navbar from "./component/Navbar/Navbar.js";
import Car from "./component/Car/Car.js";
import Footer from "./component/Footer/Footer.js";
import User from "./component/User/User.js";
import Main from "./component/Main/Main.js";
import Counter from "./component/Counter/Counter.js";
import AddMovieForm from "./component/AddMovieForm/AddMovieForm.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Popular from "./pages//movie/Pupular.js";
import TopRated from "./pages/movie/TopRated.js";
import Detail from "./pages/movie/Detail.js";
// functionnya di sebut komponen
function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top" element={<TopRated />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Main />
      <Footer nama="Fajar Abdul Jabar" /> */}
    </div>
  );
}

export default App;
