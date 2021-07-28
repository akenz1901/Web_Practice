import React from 'react'

const Users = (props) =>{
    const [userName, hobby, gender, cohort] = props

    return(
        <div>
        <img></img>
        <Users userName hobby gender cohort/>
        </div>
    )
};
export default Users