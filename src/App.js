import React, { useState } from 'react';
import UsersList from './Components/Users/UsersList'
import NewUser from './Components/Users/NewUser'

    function App() {

        const [UserObjects, setUserObjects] = useState([{ name: '', age: '' }]);

        const showUserHandler = (userObject) => {
            if (UserObjects[0].name !== ''){
                setUserObjects(prevUsers => {return [userObject, ...prevUsers]});
            }
            else{
                setUserObjects([{name: userObject.name, age: userObject.age}]);   
            }
        };

        return (
            <div>
                <NewUser  onAddUser = {showUserHandler}/>
                {UserObjects[0].name !== '' && <UsersList AllUsers = {UserObjects}/>}
                
            </div>
        );
    }

export default App;
