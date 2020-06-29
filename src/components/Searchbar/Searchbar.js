import React from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import style from "./Searchbar.module.css";
const Searchbar = ({searcher}) => {
    const search = (e) =>{
        e.preventDefault();
        const city = e.target.elements.city.value;
        searcher(city);
    }
    return (
        <div>
            <Grid container justify="center">
                <Grid item>
                    <form className={style.form} onSubmit={search}>
                        <TextField label="Enter Location" variant="outlined" size="small" name="city" className={style.input} autoComplete="off"/>
                        <Button type="submit" size="medium" variant="contained" color="primary" className={style.search}>Search</Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default Searchbar;