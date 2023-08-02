import React from "react";
import "../../css/WhatIs.css"

import Bitcoin from "../../Assets/Bitcoin.png"
import "../../css/Payment.css"
import { Link } from "react-router-dom"

export default function WhatIs() {
    return (
        <div className="whatIs" id="whatIs">
            <div className="whatIsContent" >
                <h1>WHAT IS SBP Pro?</h1>
                <h3>We store the vast majority of the digital assets in secure offline storage. swiftbusinesspayPro maintains crypto insurance and all USD cash balances are covered by FDIC insurance, up to a maximum of $250,00,00.00</h3>
                <img src={Bitcoin} alt="Bitcoin" />
            </div>
            <Link to="/signup" style={{ "width": "100%" }}>
                <button className="customButton">Sign Up</button>
            </Link>
        </div>
    );
}