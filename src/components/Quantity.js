import React from "react";
import "../components/styles/Sort.css";
import {MdProductionQuantityLimits} from "react-icons/md";
import Product from "./Product";
import Product2 from "./Product2";
import Product3 from "./Product3";
function Quantity() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
        <p className="sortText">Quantity</p>
            <MdProductionQuantityLimits className="sortIcon"/>
          <div className="card">
            <ul className="unorderdlist">
              <li className="featured"> 250 ml/g</li>
              <li> 500 ml/g</li>
              <li> 1 Litre/Kg</li>
              <li> 10Kg </li>
              <li> 15Kg</li>
              <li> 20Kg
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

export default Quantity;
