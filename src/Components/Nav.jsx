import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div style={{width: "500px", marginLeft: "auto", marginRight: "auto", display: "flex", gap: "24px", justifyContent: "center", alignItems:"center"}}>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/contacts">contacts</Link>
            </div>
        </div>
    );
};

export default Nav;