// import ShowItem from '../Meals/ShowItem';
import Modal from '../../components/UI/Modal'
import classes from './CardList.module.css';
const CardList = props =>{
    return (
       <Modal>
                <ul className={classes['card-items']}>
                    {[{id:'c1',name:'Sushi' , Quantity : 2, price:21}].map(item=>{
                        return <li>{item.name}</li>
                    })}
                </ul>
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>Rs 32.0</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
       </Modal>
    )
}

export default CardList;