import { Fragment, useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props)=>{
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event)=>{
        event.preventDefault();
        // console.log('event', event);
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }
        // console.log('enteredAmountNumber', enteredAmountNumber);
        props.onAddToCart(enteredAmountNumber);
    };
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label={"Amount"} 
                input={{id:'amount_'+props.id, type:'number', min:'1', max:'5', step:'1', defaultValue:'1 '}}>
            </Input>
            <button>+ Add</button>
            {!amountIsValid && <p>Please Enter the valid amount</p>}
        </form>
    )
};

export default MealItemForm;