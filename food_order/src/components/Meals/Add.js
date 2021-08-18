import Input from '../UI/Input';
import classes from './Add.module.css';
import {useRef} from 'react';
const Add = props =>{
    const amountInput = useRef();
     const onSubmitHandler=(event)=>{
                event.preventDefault();
                const enteredAmountValue = amountInput.current.value;
                const enteredAmountValueNumber = +enteredAmountValue;
                console.log(enteredAmountValueNumber,enteredAmountValue)
                
                props.onAddCartHandler(enteredAmountValueNumber);


     }
    return (
        <form  className={classes.form} onSubmit={onSubmitHandler}>
            <Input ref={amountInput} label="amount" input={{
                id:'amount',
                min: 1,
                max:3,
                type:Number,
                defaultValue:1
            }}/>
             <button > + Add</button>
        </form>

    )
}

export default Add;