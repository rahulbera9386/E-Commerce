import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Products from './Pages/Products/Products';
import Blog from './Pages/Blog/Blog';
import Store from './Pages/Store/Store';
import About from './Pages/About-Us/About';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/error.jsx';



function App() {
  return (

    <div className="App">


      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Error/>} />
      </Routes>




    </div>

  );
}

export default App;
