import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MangaLarge extends Component {
    render() {
        return (
            <div className="item-large">
                <NavLink to="/">
                    <div className="thumbnail">
                        <img src={this.props.thumbnail} alt="abc"/>
                    </div>
                    
            <h3 className="item-title text-dark">{this.props.title}</h3>
                </NavLink>
            </div>
        )
    }
}
