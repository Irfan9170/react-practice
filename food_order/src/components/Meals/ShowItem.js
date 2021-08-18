import Add from './Add'
import classes from './ShowItem.module.css';
import {useContext} from 'react';
import CartContext from '../../store/CartContext'
const ShowItem = props =>{
    const cartctx = useContext(CartContext);
   const onAddCartHandler = (amount)=>{
    //    console.log(amount)
         cartctx.addItem({
             id:props.id,
             name:props.name,
             amount:amount,
             price:props.price
         })
   }    
    return (
          <li className={classes.meal}>
              <div>
                  <h3>
                      {props.name}
                  </h3>
                  <div className={classes.description} >
                      {props.description}
                  </div>
                  <div className={classes.price}>
                       Rs {props.price}
                  </div>
              </div>

              <div>
                  <Add onAddCartHandler={onAddCartHandler} />
              </div>
          </li>
    )
}

export default ShowItem;