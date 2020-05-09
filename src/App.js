import React, { Component } from 'react'
import {getData} from './coronaAPI'
import {Cards, Chart, CountryPicker} from './components'

import Styles from './App.module.css'

import logo from '../src/image-2.png'

class App extends Component {
state = {
appData: {},
country: ''
}



async componentDidMount(){
    const covidInfo = await getData(); 
    this.setState({appData: covidInfo})

}


handleCountryChange = async(country) =>{
     //fetch data
const countryData = await getData(country);
    console.log(country);
    console.log(countryData);
    
    //set the state 
    this.setState({appData: countryData, country: country})
} 


    render() {
        
        return (
            <div className={Styles.container}>

                <img className={Styles.image} alt='CORONAVIRUS' src={logo}/>
                <Cards data={this.state.appData}/> 
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart country={this.state.country} data={this.state.appData}/>
                    <span> 
                       
                        <a style={{color:'white' , fontWeight: "bold"}} href='https://www.github.com/sidbhanushali'>  <p> &#169; Siddharth Bhanushali || Github </p>  </a>
                    </span>
            </div>
        )
    }
}
export default App