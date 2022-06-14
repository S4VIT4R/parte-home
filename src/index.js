import React from "react";
import ReactDOM from 'react-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OfertaEducativa from "./components/OfertaEducativa";
import Home from "./components/Home"

const divRoot = document.querySelector('#root');
const divOferta= document.querySelector('#oferta');
const divfooter= document.querySelector('#footer');

// Navbar
ReactDOM.render(<Navbar/>, divRoot);

// Oferta educativa
ReactDOM.render(<Home/>, divOferta);

// Footer
ReactDOM.render(<Footer/>, divfooter);
