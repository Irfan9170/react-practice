import CartContext from './CartContext';
import {useReducer} from 'react'

const defaultCartState ={
    items:[],
    totalAmount:0
}

const cartReducer=(state,action)=>{
    if(action.type==="ADD"){
        const updatedTotalAmount =  state.totalAmount + action.item.price * action.item.amount;
        const existingCartItem = state.items.findIndex((item)=> item.id===action.item.id);
        const existingItem = state.items[existingCartItem]; 
        let updatedItems;
        if(existingItem) {
            const updatedItem ={
                ...existingItem,
                amount:existingItem.amount + action.item.amount

            }
            updatedItems=[...state.items];
            updatedItems[existingCartItem]=updatedItem;
        } else{
             updatedItems = state.items.concat(action.item);
        }

        
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