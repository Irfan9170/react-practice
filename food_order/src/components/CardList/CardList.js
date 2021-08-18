// import ShowItem from '../Meals/ShowItem';
import Modal from '../../components/UI/Modal';
import {useContext} from 'react';
import CartContext from '../../store/CartContext';
import classes from './CardList.module.css';
import CartItem from './CartItem';
const CardList = props =>{
    const cartctx = useContext(CartContext);
    const totalAmount = cartctx.totalAmount.toFixed(2);
    const hasItem = cartctx.items.length > 0 ;
    
    return (
       <Modal onClose ={props.onClose}>
                <ul className={classes['cart-items']}>
                    {cartctx.items.map(item=>{
                        return <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} />
                    })}
                </ul>
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                    <button  onClick={props.onClose} className={classes['button--alt']}>Close</button>
                    {hasItem && <button className={classes.button}>Order</button>}
                </div>
       </Modal>
    )
}

export default CardList;