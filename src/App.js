import React, { useContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './_Shared/_Navbar/Navbar'
import Footer from './_Shared/_Footer/Footer';
import Home from './_Home/Home';
import SoftSetes from './_SoftSet/SoftSetes';
import KitchenSet from './_KitchenSet/KitchenSet';
import Registr from './_Register/Registr';
import ProductsContext from './context';
import SearchResult from './_SearchResault/SearchResault';

export default function App() {
  const datas = useContext(ProductsContext);
  let searchValue = datas.searchValue;
  const [searchbaza, searchset] = useState([]);
  function searchSpace(e) {
    searchValue = e.target.value;
  }
  function searchProduct() {
    if(searchValue !== null){
      const filteredData = datas.Furniture.filter(data => data.name.toLowerCase().includes(searchValue.toLowerCase()));
      searchset([...searchbaza, ...filteredData]);
    }
  }
  return (
    <Router>
      <div>
        <Navbar onClick={searchSpace} searchProduct={searchProduct} />
        <SearchResult searchbaza={searchbaza} />
        <Route exact path="/" component={Home} />
        <Route exact path="/SoftSet" component={SoftSetes} />
        <Route exact path="/LivingRoom" component={KitchenSet} />
        <Route exact path="/register" component={Registr} />
      </div>
      <Footer/>
    </Router>
  )
}
