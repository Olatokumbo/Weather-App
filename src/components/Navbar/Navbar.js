import React from "react";
import { AppBar, Toolbar, Typography} from "@material-ui/core";
import style from "./Navbar.module.css";
const Navbar = () => {
    return (
        <div>
            <AppBar position="sticky" className={style.appBar}>
                <Toolbar>
                <Typography variant="h6" >Weather</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;