
import { useContext } from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import cartContext from '../store/CartContext';
import CartItem from './CartItem';






const Cart = props => {
    const cartCtx = useContext(cartContext);
    const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length>0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };


    const cartItemAddHandler = item => {
        cartCtx.addItem(item);
    };


    const CartItems = (<ul className={classes['cart-items']}>
           {cartCtx.items.map(item => <CartItem
             key ={item.id}
             name ={item.productname}
             description={item.description}
             amount = {item.amount}
             price = {item.price}
             onRemove ={cartItemRemoveHandler.bind(null,item.id)}
             onAdd ={cartItemAddHandler.bind(null,item)} 
          />)}
        </ul>);
       
 

    return(
        <Modal onhideCart={props.onhideCart}>
        {CartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onhideCart}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
        
        
        </Modal>
    )
};

export default Cart;