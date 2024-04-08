import { Outlet } from "react-router-dom";
import Heeader from "../Components/Heeader";

const Layout = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{padding: "50px", display: "grid", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
            <Heeader></Heeader>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;