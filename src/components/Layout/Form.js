import {useRef} from 'react';
import classes from './Form.module.css'

const Form = props => {

    const productNameRef = useRef();
    const productDescRef = useRef();
    const productPriceRef = useRef();
    const productIdRef = useRef();


    function sumbitHandler(event){
        event.preventDefault();

        const ProdName = productNameRef.current.value;
        const ProdDesc = productDescRef.current.value;
        const ProdPrice = productPriceRef.current.value;
        const ProdId = productIdRef.current.value;

        console.log(ProdId,ProdName,ProdDesc,ProdPrice);
        let data = {ProductId:ProdId,ProductName:ProdName,Description:ProdDesc,Price:ProdPrice};
        productNameRef.current.value=''
        productDescRef.current.value='';
        productPriceRef.current.value='';
        productIdRef.current.value='';
        
        props.onAddProductList(data)

    }
return (

    <form className={classes.productform} onSubmit={sumbitHandler} >
        <div className={classes['new-product_controls']}>

            
            <div className={classes['new-product_control']}>
                <label>ProductId</label>
                <input
                type='number' required
                ref={productIdRef}/>
            </div>
            <div className={classes['new-product_control']}>
                <label>ProductName</label>
                <input
                type='text' required
                ref={productNameRef}/>
            </div>

            <div className={classes['new-product_control']}>
                <label>Description</label>
                <input
                type='text' required
                ref={productDescRef}/>
            </div>

            <div className={classes['new-product_control']}>
                <label>Price</label>
                <input
                type='number' required
                ref={productPriceRef}/>
            </div>
        </div>

        <div className={classes['new-product_actions']}>
            <button type='submit'>Add</button>
        </div>
    </form>


)
};

export default Form;
