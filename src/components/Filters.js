import React from "react";
import "../components/styles/Sort.css";
import {BsFilter} from "react-icons/bs";
import Product from "./Product";
import Product2 from "./Product2";
import Product3 from "./Product3";
function Filters() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
        <p className="sortText">Filters</p>
            <BsFilter className="sortIcon"/>
          <div className="card">
            <ul className="unorderdlist">
              <li className="featured"> All Products</li>
              <li> Natural Insecticide</li>
              <li> Plant Growth Promoters</li>
              <li> Fertilizers </li>
              <li> Plant Potiing Mix</li>
              <li> Garden Tools and 
                  Accesories
              </li>


              
            </ul>
          </div>
        </div>
        <div className="col-8 productcard">
        <Product/>
        <Product2/>
        <Product3/>
        </div>
        
      </div>
      
    </div>
    
    
  );
}

export default Filters;
