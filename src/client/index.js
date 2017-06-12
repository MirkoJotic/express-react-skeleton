import { render } from 'react-dom'
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
/** Our libs/components **/
import Header from './components/Header'
import Home from './components/Home'
import Users from './components/Users'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

const style = {
    padding: '10px'
}

const Root = () => (
    <Router>
        <div>
            <Header/>
            <Link to="/users" style={style}>Users</Link>
            <Link to="/about" style={style}>About</Link>
            <Link to="/contact-us" style={style}>Contact us</Link>
            <Route path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/about" component={About} />
            <Route path="/contact-us" component={ContactUs} />
            <Footer/>
        </div>
    </Router>
)


const rootEl = document.getElementById('root')

render(
    <Root/>,
    rootEl
)

if(module.hot) {
    module.hot.accept()
}