import React, { Component } from 'react'
import Banner from './Banner.js'
import Radio from './Radio.js'
import HomeFooter from './HomeFooter.js'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Banner />
                <Radio />
                <HomeFooter />
            </div>          
        )
    }
}
export default Home;