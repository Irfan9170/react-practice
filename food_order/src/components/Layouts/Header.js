import image from '../../assets/meals.jpg';
import classes from './Header.module.css';
import Cart from './Cart'
const Header = props =>{
    return (
        <>
                <header className={classes.header}>
                    <h1>ReactMeals</h1>
                    <Cart />

                </header>
                <div className={classes['main-image']}> 
                    <img src={image} alt="full meals" />
                </div>

        </>        
    )
}

export default Header;