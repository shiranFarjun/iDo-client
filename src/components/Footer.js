import React from 'react';
import Routes from '../router/Routes'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__logo">
        
            </div>
            <ul className="footer__nav">
                <li><a href={Routes.AboutUs}>About me</a></li>
                <li><a href={Routes.AboutUs}>Download apps</a></li>
                <li><a href={Routes.AboutUs}>Advertising a company</a></li>
                <li><a href={Routes.AboutUs}>Contact</a></li>
            </ul>
            <p className="footer__copyright">
                &copy; by Shiran Farjun. All rights reserved.
      </p>
        </div>
    )
}
export default Footer;