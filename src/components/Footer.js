import { findByTitle } from "@testing-library/react";

const Footer = () => {
    return (
        <div className="footer">
            <p>Internship Blog by Kasia Laniecka</p>
            <div className="some">
                <a href="https://www.linkedin.com/in/kasialaniecka/" target="_blank">LinkedIn</a>
                <a href="https://github.com/kattata" target="_blank">Github</a>
                <a href="https://www.instagram.com/kasialaniecka/" target="_blank">Instagram</a>
            </div>
        </div>
    );
}

export default Footer;