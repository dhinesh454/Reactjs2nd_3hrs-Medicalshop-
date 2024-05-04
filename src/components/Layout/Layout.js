import { Fragment,useState } from "react";
import Form from "./Form";
import Products from "./Products";

const Layout = props => {
    const [products,SetNewProducts]=useState([]);
    function addProducts(product){
        SetNewProducts((prevProducts)=>{
          const updatedProduct = [...prevProducts,product];
          return updatedProduct;
        });
    }
return(
    <Fragment>
        <Form onAddProductList={addProducts}/>
        <Products allProducts={products}/>
    </Fragment>

    )
}

export default Layout;