//KEY : rcc + Tab 
import React, { Component } from 'react'

//karena ada jsconfig, nggak perlu mundur folder dulu eg:"../"
//KEY : "elem" + CTRL SPACE
import Header from 'parts/Header'
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';

import LandingPage from 'json/landingPage.json';

export default class LandingPages extends Component {
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }
    render() {
        console.log("props :"+this.props);
        return (
            <>
            {/* /ketika ada props di sini, semuanya pasing ke Header */}
              <Header {...this.props}></Header>
              {/* ambil data hero */}
              <Hero refMostPicked={this.refMostPicked} data={LandingPage.hero}/>

              <MostPicked refMostPicked={this.refMostPicked} data={LandingPage.mostPicked}></MostPicked>

              <Categories data={LandingPage.categories}></Categories>
            </>
        );
    }
}
