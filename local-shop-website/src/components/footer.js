import React from 'react';
import './footer.css'; // Assuming you have a footer.css for specific styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Local Shop. All rights reserved.</p>
                <ul className="social-links">
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;