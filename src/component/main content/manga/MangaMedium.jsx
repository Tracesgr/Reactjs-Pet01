import React, { Component } from 'react'
import slugify from 'react-slugify'
import { NavLink } from 'react-router-dom'
export default class manga extends Component {
    render() {
        return (
            <div className="item-medium col-2">
                <NavLink to={"/list/" + slugify(this.props.Title) + "." +this.props.id }>
                    <div className="item-thumbnail">
                        <img src={this.props.thumbnail} alt="/"/>
                        <span className="bg-primary text-light chapter">Chap: {this.props.currentChap}</span>
                        <span className="bg-danger text-light rating">Score: {this.props.score} / {this.props.views} views </span>
                    </div>
                    <h3 className="item-title text-dark">{this.props.Title}</h3>
                </NavLink>
            </div>
        )
    }
}