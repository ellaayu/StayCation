//KEY : rcc + Tab 
import React, { Component } from 'react'

//karena ada jsconfig, nggak perlu mundur folder dulu eg:"../"
//KEY : "elem" + CTRL SPACE
import Header from 'parts/Header'
export default class LandingPages extends Component {
    render() {
        return (
            <>
                
              <Header {...this.props}></Header>  
            </>
        )
    }
}
