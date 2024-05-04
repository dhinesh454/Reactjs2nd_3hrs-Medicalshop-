import { useContext } from 'react';
import ProductItemForm from './ProductItemForm';
import classes from './FormList.module.css';
import cartContext from '../store/CartContext';


const FormList = props => {
    const cartCtx = useContext(cartContext);

    const price = `$ ${parseFloat(props.Price).toFixed(2)}`;

    const addToCartHandler = amount => {
        console.log(props)
        cartCtx.addItem({
            id:props.Id,
            productname:props.ProductName,
            description:props.Description,
            amount:amount,
            price:props.Price

        });

        console.log(cartCtx.items)
    }
    
 
    return(
        <li className={classes['product_lists']}>

                <div>
                    <h3>{props.ProductName}</h3>
                    <div className={classes.description}>{props.Description}</div>
                    <div className={classes.price}>{price}</div> 
                </div>

                <div>
                     <ProductItemForm onAddToCart={addToCartHandler} />
                </div>


          
        </li>
    )
};

export default FormList;