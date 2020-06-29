import React from "react";
import {Typography} from "@material-ui/core";
import style from "./Footer.module.css";
const Footer = () => {
    return (
        <div className={style.footer}>
            <Typography variant="body1" color="textSecondary">Weather App</Typography>
        </div>
    )
}

export default Footer;