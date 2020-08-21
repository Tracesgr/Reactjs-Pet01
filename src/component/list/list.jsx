import React, { Component } from 'react'
import data from '../../data.json'
import MangaMedium from './../main content/manga/MangaMedium'
export default class list extends Component {
    render() {
        return (
            <div>
                <div className="container newest">
                    <div className="section-title">DANH SÁCH TRUYỆN</div>
                    <div className="row">
                        {data.map((value, key)=> {
                            return <MangaMedium Title={value.Title} currentChap ={value.currentChap} thumbnail={value.thumbnail} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
