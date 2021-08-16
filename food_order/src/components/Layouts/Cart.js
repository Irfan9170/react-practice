import classes  from './Cart.module.css';
const Cart = props =>{
    return (
       <button className={classes.button}>
           <span>
               Your Cart
           </span>
           <span className={classes.badge}>
               3
           </span>
       </button>
    )
}

export default Cart;