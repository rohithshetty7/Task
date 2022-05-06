import React from "react";
import "../components/styles/Product.css";
import { AiOutlineHeart } from "react-icons/ai";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import product1 from "../components/pictures/product1.jpg"

function Product() {
  return (
    <div>
      <div class="product-card">
        <div className="innercard">
          <li class="nav-link">
            <AiOutlineHeart style={{ fontSize: "30px" }} />
          </li>
          <p className="ratetag">5kg</p>
        </div>
        <img
          src={product1}
          width={"100%"}
        ></img>

        <h4 className="text-success mt--5">Cocopeat</h4>

        <h4 class="price text-success text-muted">₹ 799</h4>
        <div className="addToCart">
          <MdOutlineAddShoppingCart style={{ fontSize: "20px" }} className='pl-2' />
          <p className="fs-5">Add to Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
