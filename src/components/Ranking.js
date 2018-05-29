import React, { Component } from 'react'
import Axios from 'axios'

class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }
    render() {
        return (
            <div className="ranking">
                <ul>
                    {
                        this.state.arr.map(function(val,ind){
                            return (
                                <li key={ind} className="clearfix">
                                    <a><img src={val.src} alt="" /><span><i></i>{val.num}</span></a>
                                    <div>
                                        <h3>{val.title}</h3>
                                        {
                                            val.song.map(function(val,index){
                                                return (
                                                    <p key={index}>{val.id}<span>{val.name}</span> - {val.singer}</p>
                                                )
                                            })
                                        }
                                        
                                        <i>></i>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <p className="pc"><a>去客户端发现更好音乐></a></p>
            </div> 
        )
    }
    componentDidMount() {
        Axios.get("./datas/ranking.json")
        .then(function(res){
            this.setState({arr: res.data});
        }.bind(this))
    }
}
export default Ranking;