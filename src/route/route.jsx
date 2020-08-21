import React, { Component } from 'react'
import {
    Route,
    Switch
  } from "react-router-dom";
import Main from '../component/main content/main'
import Recommend from '../component/recommend/recommend'
import List from '../component/list/list'
import MangaDetail from '../component/main content/manga/MangaDetail';
import contact from '../component/main content/contact';
export default class route extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/recommend" component={Recommend} />
                    <Route exact path="/list" component={List} />
                    <Route exact path="/contact" component={contact} />
                    <Route exact path="/list/:slug.:id" component={MangaDetail} />
                </Switch>
            </div>
        )
    }
}
