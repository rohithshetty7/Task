import React from "react";
import "../components/styles/Footer.css";
import brandlogo from "../components/pictures/arshbrandname.JPG";
import { GrLocation } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

import { ImFacebook } from "react-icons/im";
import { FiYoutube } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";



import { IoIosCall } from "react-icons/io";

function Footer() {
  return (
    <div className="container card card_1 bg-light">
      <div className="row ">
        <div className="col-8">
          <div className="row">
            <div className="col-2 mt-5">
              <h1>
                <img src={brandlogo} />
              </h1>
            </div>
            <div className="col-4 mt-5">
              <h4 className="text-success">About</h4>
              <ul className="footerList p-2">
                <li>About Us</li>
                <li>Careers</li>
                <li>Rentals</li>
                <li>Custom Products</li>
              </ul>
            </div>
            <div className="col-2 mt-5">
              <h4 className="text-success">Help</h4>
              <ul className="footerList p-2">
                <li>Payments</li>
                <li>Shipping</li>
                <li>Warranty</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="col-4 mt-5">
              <h4 className="text-success">Policy</h4>
              <ul className="footerList p-2">
                <li>Return Policy</li>
                <li>Terms of Use</li>
                <li>Privcacy and Security</li>
                <li>Shipping policy</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-5 ml-2">
                <p>
                  <GrLocation className="text-success" /> No.55 Anitya
                  Apartment, Ground-B, Thindlu manin Rd, Maruthi Layout,
                  Kodigelli Bangalore,Karnataka 560097
                </p>
              </div>
              <div className="col-3">
                <p>
                  {" "}
                  <MdEmail className="text-success" />
                  info@arshdpvt.com
                </p>
              </div>

              <div className="col-3">
                <IoIosCall className="text-success" />
                <p>91830534680</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-4 mycard" >
              <h4>Be Informed</h4>
              <h5>Sign up for newsletters</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <input className="input" placeholder="Email"/> <br/>
            <br/>
            <p><button className="cardButton">Submit</button></p>
            <div className="socialmedia">
                <FaInstagram style={{marginLeft:"60px"}}/>
                <ImFacebook style={{marginLeft:"30px"}}/>
                <FiYoutube style={{marginLeft:"30px"}}/>
                <AiFillLinkedin style={{marginLeft:"30px"}}/>
            </div>
          </div>
        <div className="row">
          <div className="col-5">
            <footer>
              <p class="copyright text-success">
                Copyright @ 2021 ARSH theme by AKOI. All Right Reserved.
              </p>
            </footer>
          </div>
          <div className="col-3 text-success">Terms of use|Privacy Policy </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
