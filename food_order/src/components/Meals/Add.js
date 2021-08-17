import Input from '../UI/Input';
import classes from './Add.module.css';
import {useRef,useState} from 'react';
const Add = props =>{
    const amountInput = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);
     const onSubmitHandler=(event)=>{
         
                event.preventDefault();
                const enteredAmount = amountInput.current.value;
                const enteredAmountNumber = +enteredAmount;
                // console.log(enteredAmountValueNumber,enteredAmountValue)
                if (
                    enteredAmount.trim().length === 0 ||
                    enteredAmountNumber < 1 ||
                    enteredAmountNumber > 5
                  ) {
                    setAmountIsValid(false);
                    return;
                  }
                props.onAddCartHandler(enteredAmountNumber);


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