import React from 'react'

const Home = () => (
    <div className="home">
        <h4>{'This is the home page of REACT starters kit that includes: '}</h4>
        <ul>
            <li>{'React => react'}</li>
            <li>{'React router => react-router-dom'}</li>
            <li>{'HMR => courtesy of webpack-dev-server'}</li>
            <li>{'ESLint => some custom rules that I like'}</li>
        </ul>
        <h4>{'TODO:'}</h4>
        <ul>
            <li>{'Set up testing'}</li>
            <li>{'Decide on CSS approach'}</li>
        </ul>
    </div>
)

export default Home