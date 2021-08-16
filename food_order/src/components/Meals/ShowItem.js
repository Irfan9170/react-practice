import classes from './ShowItem.module.css'
const ShowItem = props =>{
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

              </div>
          </li>
    )
}

export default ShowItem;