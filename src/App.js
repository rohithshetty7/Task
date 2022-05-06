import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Layouts/Navbar";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Export from "./components/Export";
import Blogs from "./components/Blogs";
import Contacts from "./components/Contacts";
import Sort from "./components/Sort";
import Product from "./components/Product";
import Filters from "./components/Filters";
import Quantity from "./components/Quantity";
import BasicPagination from "./components/BasicPagination";
import img2 from "../src/components/pictures/picture1.PNG"
import arsh from "../src/components/pictures/arsh.JPG"
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/export" element={<Export />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Router>
        <img
          src={img2}
          className="centerimag " width="90%" 
        ></img>
        
      <div className="sortPage">
        <Sort/>
        </div>
       
        <div className="filters">
        <Filters />
        </div>
        <div className="filters">
          <Quantity/>
        </div>
        <div className="pagenation">
          <BasicPagination/>
        </div>
        <div>
          <img src={arsh} width="100%" className="mt-5"/>
        </div>
        
          <Footer/>
        
      </div>
    </div>
  );
}

export default App;
