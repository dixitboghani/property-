import React, { Component } from 'react'
import TempHeader from '../components/TempHeader'
import SearchBox from '../components/SearchBox'
import TempFooter from '../components/TempFooter'
import TopProperties from '../components/1Properties'
import HomeCarousel from '../components/HomeCarousel'
import FProperties from '../components/FeautureProperties'


class LandingPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <TempHeader/>
                
                <SearchBox/>
                <FProperties/>
                <HomeCarousel/>
                
                
                <TempFooter/>
            </div>
        )
    }
}

export default LandingPage
