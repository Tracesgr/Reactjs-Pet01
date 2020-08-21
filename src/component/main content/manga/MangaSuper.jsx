import React, { Component } from 'react'
import data from './../../../data.json'
export default class MangaSuper extends Component {
    render() {
        return (
            <div className="item-super col-6">
                    <a href="/" alt="abc">
                        <div className="super-left">
                            <img src={data[3].thumbnail} alt="abc"/>
                        </div>
                    </a>
                <div className="super-right">
                    <a className="item-title text-dark" href="/">Justice League (2018)</a>
                    <ul>
                        <li><a className="text-dark" href="/">chap 9</a></li>
                        <li><a className="text-dark" href="/">chap 8</a></li>
                        <li><a className="text-dark" href="/">chap 8</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
