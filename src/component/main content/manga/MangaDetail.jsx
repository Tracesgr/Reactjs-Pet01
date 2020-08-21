import React, { Component } from 'react';
import data from '../../../data.json'
class MangaDetail extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                    </div>
                    {data.map((value, key) => {
                            if(value.id === parseInt(this.props.match.params.id)) {
                                return (value.content.map((value, key)=>{
                                    return <img src={value} alt="abc"></img>
                                }))
                            }
                        return true;
                    })}
                </div>
            </div>
        );
    }
}

export default MangaDetail;