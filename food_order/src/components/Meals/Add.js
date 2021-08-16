import Input from '../UI/Input';
import classes from './Add.module.css';
const Add = props =>{
    return (
        <form  className={classes.form}>
            <Input label="Quantity" input={{
                id:'quantity',
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