import React, { useState, useRef } from "react";
import ButtonNav from "./components/ButtonNav";
import "./styles/NavBar.css";
import "./styles/ButtonNav.css";
import Sidebar from "./components/Sidebar";
import CoinList from "./components/CoinList";
import Aabout from "./components/Aabout";
import Footer from "./components/Footer";
import "./styles/Coin.css";


const App = () => {
  const Home=useRef(null);
  const List=useRef(null);
  const About=useRef(null)

  const scrolltosection=(elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:"smooth"
    })
  }


  return (
    <>
      <div ref={Home} id="home">
        <nav className="navbar">
          <div className="nav-logo">
            NovinCoin
            <i class="fi fi-rs-coin icon-color"></i>
          </div>

          <ul className="nav-items">
            <li className="nav-item">
              <a href="#home" onClick={()=>scrolltosection(Home)}>خانه</a>
            </li>
            <li className="nav-item"  onClick={()=>scrolltosection(List)}>
              <a href="#coinlist">لیست ارزها</a>
            </li>
            <li className="nav-item"  onClick={()=>scrolltosection(About)}>
              <a href="#footer">درباره ی ما</a>
            </li>
          </ul>

          <ButtonNav />
        </nav>
        <Sidebar />
      </div>

      <div ref={List} className="trade">
        <CoinList />
      </div>

      
      <div ref={About}>
        <Aabout/>
        <Footer/>
      
      </div>
    </>
  );
};

export default App;
