import React,{Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './Home.js'
import Ranking from './Ranking.js'
import Search from './Search.js'

class Main extends Component{
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path="/ranking" component={Ranking} />
                    <Route path="/search" component={Search} />
                </Switch>
            </div>
        )
    }
}
export default Main;