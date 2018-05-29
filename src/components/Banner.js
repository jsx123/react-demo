import React,{Component} from 'react'
import Axios from 'axios'
import Swiper from 'swiper'
import '../css/swiper.min.css'

class Banner extends Component{
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }
    render() {
        return (
            <div className="banner">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                    {
                        this.state.arr.map(function(value,index){
                            return (
                                <div className="swiper-slide" key={index}>
                                    <img src={value.src} alt=""/>
                                </div>
                            )
                        })
                    }
                    </div>
                                    
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        Axios.get("./datas/banner.json")
        .then(function(res){
            this.setState({arr: res.data});
        }.bind(this))
    }
    componentDidUpdate() {
        new Swiper('.swiper-container',{
            loop: true,
            autoplay: true,
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }
}
export default Banner