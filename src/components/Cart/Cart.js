import { Fragment } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props)=>{
    const foodList = [{id: 'c1', name: 'Sushi', amount: 2, price: 20}]
    const cartItems = <ul>{foodList.map(item=><li>{item.name}</li>)}</ul>;
    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>30</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;