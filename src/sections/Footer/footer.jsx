import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { socialLinks } from '../../Links/Links';
import CopyLink from '../../Links/CopyLink';

const Footer = () => {


    const whatsappLink = socialLinks.find(link => link.className === 'whatsapp');

    return (
        <footer className="footer">

            <nav className="footer-nav">
                <ul>
                    <li> <a href="#home">Home</a></li>
                    <li> <a href="#services">Services</a></li>
                    <li> <a href="#about">About me</a></li>
                    <CopyLink />
                    <li> <a href={whatsappLink?.url || '#'} target="_blank" rel="noopener noreferrer">Contact me </a> </li>
                </ul>
            </nav>

            <div className="social-icons">
                {socialLinks.map((Social) => (
                    <a
                        key={Social.id}
                        href={Social.url}
                        className={Social.className}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className={Social.icon}></i>
                    </a>
                ))}
            </div>

            <div className="contact-info">
                <p>
                    <a href="mailto:elsayedkhaled2026@gmail.com" className="contact-link">
                        <FontAwesomeIcon icon={faEnvelope} className="Email-icon" />
                        elsayedkhaled2026@gmail.com
                    </a>
                </p>
                <p className="phone-number">
                    <a href="tel:+201020774553"> <FontAwesomeIcon icon={faPhone} className="Phone-icon" /> :201020774553</a>
                </p>
            </div>

            <div className="footer-separator"></div>
        </footer>
    )
}

export default Footer;