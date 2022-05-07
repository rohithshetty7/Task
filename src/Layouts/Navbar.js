import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import {IoMdNotificationsOutline} from "react-icons/io";
import {AiOutlineShoppingCart} from "react-icons/ai";
import { BrowserRouter as Router ,Link} from 'react-router-dom';
import "../components/styles/Navbar.css";
import logo from "../components/pictures/logo.JPG";
import im3 from "../components/pictures/picture2.PNG";

function Navbar() {
    return ( 
    <div className='mt-4'> 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">
    <img  height={"100px"} width={"100px"} src={logo} />
    </Link>
  <button class="navbar-toggler" type="button" 
  data-toggle="collapse" data-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home </Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/about">About </Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/shop">Shop </Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/export">Export </Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/blogs">Blogs </Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/contacts">Contacts </Link>
      </li>
      
      <li class="nav-link">
      <AiOutlineHeart style={{fontSize:"30px"}}/>
      </li>

      <li class="nav-link">
      <IoMdNotificationsOutline style={{fontSize:"30px"}}/>
      </li>
      <li class="nav-link">

        <AiOutlineShoppingCart style={{fontSize:"30px"}}/>
      </li>
      <li>
  <Link class="profile-photo" to="/"><img  height={"50px"} width={"50px"}
   src={im3}/></Link>

      </li>
      
    </ul>
    
  </div>
</nav>
        
         </div>
    )
}

export default Navbar