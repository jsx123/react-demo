import React,{Component} from 'react'
import Axios from 'axios'

class Radio extends Component{
    constructor(props) {
        super(props)
        this.state = {
            arr: []
        }
    }
    render() {
        return (
            <div className="radio">
                <h3>电台</h3>
                <ul className="clearfix">
                    {
                        this.state.arr.map(function(value,index){
                            return (
                                <li key={index}>
                                    <img src={value.src} alt="" />
                                    <p>{value.txt}</p>
                                    <i></i>
                                </li>
                            )
                        })
                    } 
                </ul>
                <div className="hot">
                    <h3>热门歌单</h3>
                    <p><a>去客户端发现更多好音乐 ></a></p>
                </div>
            </div>
        )
    }
    componentDidMount() {
        Axios.get("./datas/radio.json")
        .then(function(res){
            this.setState({arr: res.data});
        }.bind(this))
    }
}
export default Radio;