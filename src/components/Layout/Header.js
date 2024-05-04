import {Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css'
import imageFile from '../../assests/pharmaceutical.jpg';
const Header = props =>{
    return(
        <Fragment>
            <header className={classes.header}>
                 <h1>MedicalShop</h1>
                 <HeaderCartButton onClick={props.onCartShow} />
            </header>
            <div className={classes['main-image']}>
            <img src={imageFile} alt='A table full of delicious food!'/>
        </div>
        </Fragment>
    )
};


export default Header;