import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Route,
    Link
} from 'react-router-dom'
import User from './User'

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

const style = {
    paddingLeft: '10px',
    paddingRight: '10px'
}

class Users extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const userLinks = users.reduce((users_arr, user) => {
            users_arr.push({ link: `${this.props.match.url}/${user.id}/view`, name: user.name})
            return users_arr
        }, [])
        return (
            <div>
                <p>Users</p>
                <p>Click on one of them and see the changes</p>
                { userLinks.map((user) => <Link to={user.link} key={user.link} style={style}>{user.name}</Link> )}
                <Route path={`${this.props.match.url}/:userId/view`} component={User}/>
            </div>
        )
    }
}

Users.propTypes = {
    match: PropTypes.object.isRequired
}

export default Users