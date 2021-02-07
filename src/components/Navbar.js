import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={"/"}>
                <h2>&lt;Internship Blog/&gt;</h2>
                <p>by Kasia Laniecka</p>
            </Link>
        </div>
    );
}

export default Navbar;
