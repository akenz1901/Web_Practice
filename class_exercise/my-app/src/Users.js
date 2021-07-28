import React from 'react'
import User from './Users'
const User = () => {
    const users = [
        {userName: 'Franscis', hobby:'Druming', gender:'Male', cohort:''},
        {userName: '', hobby:'', gender:'', cohort:''},
        {userName: '', hobby:'', gender:'', cohort:''},
        {userName: '', hobby:'', gender:'', cohort:''}
    ]
    return(
        <div>
            {users.map(user => <User {...user}/>)}
        </div>
    )
}
export default User