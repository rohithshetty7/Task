import React from "react";
import "../components/styles/Product.css";
import { AiOutlineHeart } from "react-icons/ai";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import product2 from "../components/pictures/product2.jpg"

function Product2() {
  return (
    <div>
      <div class="product-card">
        <div className="innercard">
          <li class="nav-link">
            <AiOutlineHeart style={{ fontSize: "30px" }} />
          </li>
          <p className="ratetag">250ml</p>
        </div>
        <img
          src={product2}
          width={"100%"}
        ></img>

        <h4 className="text-success mt--5">Epsom Salt</h4>

        <h4 class="price text-success text-muted">₹ 799</h4>
        <div className="addToCart">
          <MdOutlineAddShoppingCart style={{ fontSize: "30px" }} className='pl-2' />
          <p className="fs-5">Add to Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Product2;
