import { Fragment, useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props)=>{
const [isCheckout, setIsCheckout] = useState(false);

    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount;
    const hasItems = cartCtx.items.length > 0;

    const cartItemAddHandler = (item)=>{
        cartCtx.addItem(item);
    };
    const cartItemRemoveHandler = (id)=>{
        cartCtx.removeItem(id);
    };
    const orderHandler = ()=>{
        setIsCheckout(true);
    };

    const submitOrderHandler = (userData)=>{
        console.log('user Datra', userData);

        fetch('/////////database_link_for_orders////////',{
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderItems: cartCtx.items,
            })

        })
    };
    const foodList = cartCtx.items;
    const cartItems = (<ul className={classes['cart-items']}>{foodList.map((item)=>(
            <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} 
            onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}></CartItem>
        ))}</ul>);

    const modalAction = (<div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>close</button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>);   

    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler}></Checkout>}
            {!isCheckout && modalAction}
            
        </Modal>
    )
}

export default Cart;