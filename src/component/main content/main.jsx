import React, { Component } from 'react'
import MangaMedium from './manga/MangaMedium'
import data2 from './../../data2.json'
import data from './../../data.json'
import MangaLarge from './manga/MangaLarge'
import MangaSuper from './manga/MangaSuper'
export default class main extends Component {
    render() {
        return (
            <div className="container">
                <div className="section-title">CHAP MỚI NHẤT</div>
                <div className="row first">
                    {data.map((value, key)=> {
                        return <MangaMedium score = {value.score} Title={value.Title} currentChap ={value.currentChap} thumbnail={value.thumbnail} id={value.id} views={value.views} />
                    })}
                </div>
                
                <div className="row second">
                <div className="col-8">
                    <div className="row">
                        <MangaSuper />
                        <MangaSuper />
                        <MangaSuper />
                        <MangaSuper />
                    </div>
                        
                    </div>
                    <div className="top-rating col-4">
                        <div className="section-title text-center">SẮP RA MẮT</div>
                        {data2.map((value, key)=> {
                            return <MangaLarge title ={value.title} thumbnail={value.thumbnail} />
                        })}
                    </div>

                    
                </div>
               
                
            </div>
        )
    }
}