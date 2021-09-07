import { Fragment, useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props)=>{
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount;
    const hasItems = cartCtx.items.length > 0;

    const cartItemAddHandler = (item)=>{
        cartCtx.addItem(item);
    }
    const cartItemRemoveHandler = (id)=>{
        cartCtx.removeItem(id);
    }

    const foodList = cartCtx.items;
    const cartItems = <ul className={classes['cart-items']}>{foodList.map((item)=>(
            <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} 
            onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}></CartItem>
        ))}</ul>;
    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;