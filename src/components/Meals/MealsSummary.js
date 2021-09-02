import { Fragment } from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary  = ()=>{
    return(
        <section className={classes.summary}>
            <h2>Delicious Food, Delivered to you</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
        </section>
    )
};

export default MealsSummary;