import { Button } from '@material-ui/core'
import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__search">
                <Button variant="outlined" className="banner__searchButton">Search Dates</Button>
            </div>
            <div className="banner__info">
            <h1>Get out and stretch your imaginaion</h1>
          <h5>Plan a different kind of gateway to uncover the hidden gems near you.</h5>
          <Button variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
