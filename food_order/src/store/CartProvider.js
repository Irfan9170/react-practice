import CartContext from './CartContext';
import {useReducer} from 'react'

const defaultCartState ={
    items:[],
    totalAmount:0
}

const cartReducer=(state,action)=>{
    if(action.type==="ADD"){
        const updatedItems = state.items.concat(action.item);
        // console.log(state.totalAmount,"hhhhhhhhhhh");
        console.log(action.item.price,action.item.amount)
        const updatedTotalAmount =  state.totalAmount + action.item.price * action.item.amount;
        console.log(updatedTotalAmount,"heeee")
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    return defaultCartState;
}

const CardProvider = props=>{
 const [cartState,dispatchAction]=useReducer(cartReducer,defaultCartState);
   const addItemHandler = item =>{
       dispatchAction({
           type:"ADD",
           item:item
       })
   };
   const removeItemHandler = id =>{
       dispatchAction({
        type:"REMOVE",
        id:id
       })
   };

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem :addItemHandler,
        removeItem:removeItemHandler
    }
    return (
         <CartContext.Provider value={cartContext}>
             {props.children}
         </CartContext.Provider>
    )
}

export default CardProvider;