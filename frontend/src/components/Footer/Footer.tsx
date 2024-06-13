import React from 'react';
import './Footer.css';

/*
  A footer cotnaining the developers' or the organization's name.
*/

function Footer() {
    const devName = "Armina Parvaresh Rizi"
    return (
        <footer className="app-footer">
            <p>Created by {devName}</p>
        </footer>
    );
}

export default Footer;