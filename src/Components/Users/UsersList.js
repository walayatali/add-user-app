import React from 'react';
import User from './User';

function UsersList(props)	{
	console.log(props.AllUsers);
	return (
		<div>
			<User AllUsers = {props.AllUsers} />
		</div>
	)
}

export default UsersList;