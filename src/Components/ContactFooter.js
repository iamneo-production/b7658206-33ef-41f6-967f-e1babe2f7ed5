import React, {Component} from 'react';
import image from '../Assets/UniQLogo.png';
export default function ContactFooter(){
    return <div className="contact">
        <div className="social-container">
            <div className="social-body">
                
            </div>
            <br/>
            <div className="contact-body">
                <img className="bankLogo" src={image}/>
                
            </div>
            <div className="copyright">&copy;2022 | UNIQ BANK </div>
        </div>
    </div>
}