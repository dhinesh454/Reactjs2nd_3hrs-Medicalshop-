import FormList from "./FormList";
import Card from "../UI/Card";
import classes from './Products.module.css';




const Products= props =>{

    if(props.allProducts.length === 0|| undefined){
        return (
            <div className={classes["allproduct_lists"]}>
                <h2>No Products Found...Add the Products</h2>
            </div>
        )
    }

    const productList=props.allProducts.map((prod)=>(
        <FormList
            Id={prod.ProductId}
            Key={prod.ProductName}
            ProductName={prod.ProductName}
            Description={prod.Description}
            Price={prod.Price}
        />
    ))

    return (

        <section className={classes["allproduct_lists"]}>
            <h2>Products</h2>
            <Card>
               <ul>{productList}</ul>
            </Card>


            
        </section>
    )

};


export default Products;