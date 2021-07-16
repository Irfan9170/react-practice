import React from 'react';
import Card from '../UI/Card';
import styles from './ShowUser.module.css';

const ShowUser = (props) => {
	return (
		<Card className={styles.users}>
			<ul>
				{props.users.map((user) => (
					<li key={user.id}>
					{	`My  name is ${user.userName} and I am ${user.userAge} years old.`}
					</li>
				))}
			</ul>
		</Card>
	);
};

export default ShowUser;
