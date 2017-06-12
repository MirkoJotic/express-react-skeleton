import React from 'react'
import PropTypes from 'prop-types'

/** IMAGINE THIS IS REDUX **/
const users = [
    {
        id: 1,
        name: 'Bob',
        age: 34
    },
    {
        id: 2,
        name: 'Steve',
        age: 33
    },
    {
        id: 3,
        name: 'John',
        age: 45
    }
]

const User = ({match}) => {
    let user = null
    user = users.find(u => u.id === parseInt(match.params.userId)) // UGH why is this param a string
    return (
        <div>
            { user ? `You've clicked.... on ${user.name}` : 'Loading...' }
        </div>
    )
}

User.propTypes = {
    match: PropTypes.object.isRequired
}

export default User