import { findByTitle } from "@testing-library/react";

const Footer = () => {
    return ( 
        <div className="footer">
            <p>Internship Blog by Kasia Laniecka</p>
            <div className="some">
                <a href="https://www.linkedin.com/in/kasialaniecka/">LinkedIn</a>
                <a href="https://github.com/kattata">Github</a>
                <a href="https://www.instagram.com/kasialaniecka/">Instagram</a>
            </div>
        </div>
     );
}
 
export default Footer;