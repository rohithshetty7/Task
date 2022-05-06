import React from "react";
import "../components/styles/Product.css";
import { AiOutlineHeart } from "react-icons/ai";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import product3 from "../components/pictures/product3.jpg"

function Product3() {
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
          src={product3}
          width={"100%"}
        ></img>

        <h4 className="text-success mt--5">vermicompost</h4>

        <h4 class="price text-success text-muted">₹ 799</h4>
        <div className="addToCart">
          <MdOutlineAddShoppingCart style={{ fontSize: "30px" }} className='pl-2' />
          <p className="fs-5">Add to Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Product3;
