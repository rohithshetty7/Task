import React from "react";
import "../components/styles/Sort.css";
import {BiSortAlt2} from "react-icons/bi"
import Filters from "./Filters";
import Product from "./Product";
import Product2 from "./Product2";
import Product3 from "./Product3";

function Sort() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <p className="sortText">SORT</p>
        <BiSortAlt2 className="sortIcon"/>
          <div className="card">
            <ul className="unorderdlist">
              
              <li className="featured"> Featured</li>
              <li> New Arrival</li>
              <li> Discount</li>
              <li> Price(Highest First)</li>
              <li> Price(Lowest First)</li>

              
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

export default Sort;
