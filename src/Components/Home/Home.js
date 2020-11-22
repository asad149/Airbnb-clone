import React from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
        src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"

        title="Online Experiences"
        desciption="Unique activities we can do together, led by a world of hosts."
        />
        <Card src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
        
        title="Unique stays"
        desciption="Spaces that are more than just a place to sleep."/>
        <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
        
        title="Entire Homes"
        desciption="Comfortable private places, with room for friends or family."/>
      </div>

      <div className="home__section">
        <Card src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
        title="3 Bedroom Flat in Bournemouth"
        desciption="Superhost with a stunning view of the beachside in Sunny Bournemouth"
        price="$130/night"/>
        <Card src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80&w=680&h=395"
        title="Penthouse in London"
        desciption="Superhost with a stunning view of the beachside in Sunny Bournemouth"
        price="$350/night"/>
   
        <Card src="https://media.nomadicmatt.com/2018/apartment.jpg"
        title="1 Bedroom apartmen" 
        desciption="Superhost with a stunning view of the beachside in Sunny Bournemouth"
        price="$200/night"
        />
      </div>
    </div>
  );
};

export default Home;
