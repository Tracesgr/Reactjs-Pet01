import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top main-navbar">
                <div className="container">
                <NavLink className="navbar-brand text-info font-weight-bold" to="/">Truyen Tranh 24h</NavLink>
                {/* <div className="collapse navbar-collapse" id="navbarResponsive"> */}
                    <ul className="navbar-nav mr-auto ml-5">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/recommend">Truyện đề cử</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/list">Danh sách</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Liên hệ</NavLink>
                        </li>
                    </ul>
                    <input className="form-control search" type="text" />
                {/* </div> */}
                </div>
            </nav>
        )
    }
}
