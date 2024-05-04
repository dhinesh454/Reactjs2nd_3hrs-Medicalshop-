import { useState } from 'react';
import Header from './components/Layout/Header';

import Layout from './components/Layout/Layout';
import CartProvider from './components/store/CartProvider';
import Cart from './components/Cart/Cart';


function App() {

const [cartIsShown , setCartIsShown] =useState(false);


const showCartHandler = () => {
  setCartIsShown(true);
}

const hideCartHandler = () => {
  setCartIsShown(false);
}



  
  return (
    <CartProvider>
    {cartIsShown &&  <Cart onhideCart={hideCartHandler}/>}   
      <Header onCartShow={showCartHandler}/>
      <main>
        <Layout/>
      </main>
    </CartProvider>

  );
}

export default App;
