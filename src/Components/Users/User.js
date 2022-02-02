import React from 'react';
import styles from './User.module.css';

function User(props)	{
	return (
			<div>
			{
				props.AllUsers.map(user => <div className={styles.user}><p>{user.name} {user.age}</p></div>)
			}
			</div>
	)
}

export default User;