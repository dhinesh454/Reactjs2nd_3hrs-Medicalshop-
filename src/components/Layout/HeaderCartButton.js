import {useContext,useEffect,useState} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import cartContext from "../store/CartContext";                         

const HeaderCartButton = props => {
    const [btnIsHighlighted , setBtnIsHighlighted]=useState(false);
    const cartCtx = useContext(cartContext);

    const {items} = cartCtx;

    const numberofCartItems = items.reduce((curr,item)=>{
        return curr+item.amount;
    },0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
        return;
        }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
     }, [items]);


    return(
        <button className={btnClasses} onClick={props.onClick}> 
            <span className={classes.icon}>
                <CartIcon/>
            </span>    
                <span>MyCart</span>
                <span className={classes.badge}>{numberofCartItems}</span>
           
        </button>
    )
};

export default HeaderCartButton;