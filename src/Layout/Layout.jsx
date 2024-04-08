import { Outlet } from "react-router-dom";
import Heeader from "../Components/Heeader";

const Layout = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "1"}}>
            <div style={{background: "dodgerblue", padding: "50px"}}>
            <Heeader></Heeader>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;