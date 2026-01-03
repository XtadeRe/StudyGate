import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-gray-100 text-gray-600 py-4 text-center border-t border-gray-200">
            <span className="copyright-text text-sm">© {new Date().getFullYear()} Все права защищены.</span>
        </footer>
    );
};

export default Footer;
