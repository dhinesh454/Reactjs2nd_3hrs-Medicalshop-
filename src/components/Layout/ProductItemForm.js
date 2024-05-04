import { useRef,useState } from "react";
import classes from './ProductItemForm.module.css';
import Input from "../UI/Input";


const ProductItemForm = props => {
    const [amountisvalid , setAmountIsValid] = useState(true);
    const amountInputRef = useRef();


    function submitHandler(event){
        event.preventDefault();

        const enteredAmout = amountInputRef.current.value;
        const enteredAmoutNumber = +enteredAmout;

        if(enteredAmout.trim().length === 0 || enteredAmoutNumber<1 || enteredAmoutNumber>5 ){
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmoutNumber)
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
              ref={amountInputRef}
              label='Amount' input={{
                id:'Amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
              }}
            />
            <button>+ Add</button>
            {!amountisvalid && <p>Please Enter a Valid Amount (1-5) !!..</p>}
        </form>
    )
};

export default ProductItemForm;