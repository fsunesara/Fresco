import React, { Component } from "react"
import { Link } from 'gatsby'

export default class NavBar extends Component {
    state = {
        open: false,
        classnames:'collapse navbar-collapse',
        links:[
            {
                id:1,
                path:'/',
                text:'Home'
            },
            {
                id:2,
                path:'/about',
                text:'About'
            }
        ]
    }

    navBarAction = () => {
        this.state.open ? this.setState({open:false,classnames:"collapse navbar-collapse"}) : this.setState({open:true,classnames:"collapse navbar-collapse show"});
    }
    render() {
        return <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="navbar-brand"/>
        <button className="navbar-toggler" type="button" onClick={this.navBarAction}>
            <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.classnames}>
            <ul className="navbar-nav mx-auto">
                {
                    this.state.links.map(link => {
                        return(
                            <li key={link.id} className="nav-item">
                                <Link to={link.path} className="nav-link text-capitalize">
                                    {link.text}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
       </nav>
    }
}