import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Buttons from "./Button";

const Header=()=>{
    return(<div className="nav-bar">
            <div className="logobox">
                <Logo/>
            </div>
            <Menu/>
            <Buttons/>
        
    </div>)
}
export default Header;