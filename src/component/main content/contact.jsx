import React, { Component } from 'react'

export default class contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <form className="contact3000">
                <div className="form-group">
                    <label for="email">Email</label>
                    <input className="form-control" id="email" type="email" name="email" required/>
                </div>
                <div className="form=group">
                    <label for="name">Tên</label>
                    <input type="text" className="form-control" name="name"/>
                </div>
                <div className="form-group">
                    <label for="comment">Ý kiến</label>
                    <input type="text" className="form-control" id=""comment/>
                </div>
                <button className="btn btn-info" type="submit">Gửi</button>
            </form>
                    </div>
                
                </div>
                
            </div>
            
            
        )
    }
}
