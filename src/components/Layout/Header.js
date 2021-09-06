import React, { Fragment } from "react";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props)=>{
    const backgroundImage = 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>ChefBite</h1>
                <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={backgroundImage} alt='delicious food' />
            </div>
        </Fragment>
    )
};

export default Header;