import React, { useState } from 'react';
import styles from './NewUser.module.css';

function NewUser(props)	{

	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');

	const usernameChangeHandler = (e) => {
		setUsername(e.target.value);
	}

	const ageChangeHandler = (e) => {
		setAge(e.target.value);
	}

	const submitHandler = (e) => {
		e.preventDefault();

		const userObject = {
			name: username,
			age: age
		}
		props.onAddUser(userObject);
	}

	return (
		<div className={styles['new-user']}>
			<form onSubmit={submitHandler}>
				<div className={styles['new-user-controls']}>
					<div className={styles['new-user-control']}>
						<label>User Name</label>
						<input type="text" onChange={usernameChangeHandler}/>
					</div>
					<div className={styles['new-user-controls']}>	
						<label>Age</label>
						<input type="number" onChange={ageChangeHandler}/>
					</div>
				</div>
				<div className={styles['new-user-actions']}>
					<button type="submit">Add User</button>
				</div>
			</form>
		</div >
	)
}

export default NewUser;