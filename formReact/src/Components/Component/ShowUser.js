import React from 'react';
import Card from '../UI/Card';
import styles from './ShowUser.module.css'

const ShowUser=(props)=>{
    return (
        <Card className={styles.users}>
        <ul>
            {props.users.map(user=> <li>{user.userName} {user.userAge}</li>)}
        </ul>
        </Card>
       
    )

}

export default ShowUser;