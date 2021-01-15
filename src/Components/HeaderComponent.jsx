import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { withRouter} from 'react-router'

class HeaderComponent extends Component{
    render(){
        return( 
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div> <a href="http://www.google.com" className="navbar-brand">College Management</a></div>
                    <ul className="navbar-nav">
                        <li><Link  className="nav-link" to="/students">Students</Link></li>
                        <li><Link  className="nav-link" to="/departments">Departments</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link  className="nav-link" to="/login">login</Link></li>
                        <li><Link  className="nav-link" to="/logout">logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)