import { Button } from '@material-ui/core'
import React from 'react'
import SearchResult from '../SearchResult/SearchResult'
import './SearchPage.css'
const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 august to 30 august . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
                
            </div>
            <SearchResult
            
            img="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1039&q=80"
            location="Private room in center of London"
            title="Stay at this spacious Ewardian House"
            description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
            star={4.73}
            price="$30 / night"
            total="$117 total"/>
            <SearchResult
            
            img="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            location="Private room in center of London"
            title="Stay at this spacious Ewardian House"
            description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
            star={4.73}
            price="$30 / night"
            total="$117 total"/>
             <SearchResult
            
            img="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
            location="Private room in center of London"
            title="Stay at this spacious Ewardian House"
            description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
            star={4.73}
            price="$30 / night"
            total="$117 total"/>
            <SearchResult
            
            img="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
            location="Private room in center of London"
            title="Stay at this spacious Ewardian House"
            description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
            star={4.73}
            price="$30 / night"
            total="$117 total"/>
            <SearchResult
            
            img="https://images.unsplash.com/photo-1560200353-ce0a76b1d438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            location="Private room in center of London"
            title="Stay at this spacious Ewardian House"
            description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
            star={4.73}
            price="$30 / night"
            total="$117 total"/>
            
        </div>
    )
}

export default SearchPage
