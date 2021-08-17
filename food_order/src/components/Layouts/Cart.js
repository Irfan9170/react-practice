import classes  from './Cart.module.css';
import {useContext} from 'react';
import CartContext from '../../store/CartContext';
const Cart = props =>{
    const cartCtx=useContext(CartContext);
    console.log(cartCtx)
    const numberOfCart = cartCtx.items.reduce((currentValue,item)=>{
        return currentValue + item.amount;
    },0);
    return (
       <button onClick={props.onShowCardList} className={classes.button}>
           <span>
               Your Cart
           </span>
           <span className={classes.badge}>
               {numberOfCart}
           </span>
       </button>
    )
}

export default Cart;