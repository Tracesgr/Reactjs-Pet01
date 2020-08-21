import React, { Component } from 'react'
import data from '../../data.json'
import MangaMedium from './../main content/manga/MangaMedium'
export default class recommend extends Component {
    render() {
        return (
            <div>
                <div className="container newest">
                    <div className="section-title">TRUYỆN ĐỀ CỬ</div>
                    <div className="row">
                        {data.map((value, key) => {
                            if(value.score>=5 && value.views > 10000)
                                return <MangaMedium views={value.views} Title={value.Title} currentChap ={value.currentChap} thumbnail={value.thumbnail} />
                            return true
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
