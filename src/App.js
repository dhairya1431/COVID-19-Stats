import React, { Component } from 'react'
import style from './App.module.css'
import {fetchdata} from './API'

import Cards from './Components/Cards/cards'
import Chart from './Components/Chart/chart'
import Countrypicker from './Components/CountryPicker/countrypicker'
import image from './Images/image.png'

class App extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data : {},
             country: ''
        }
    }
    
    handleCountryChange = async (country) =>{
        const fetchedata = await fetchdata(country);
        console.log(fetchedata)

        this.setState({data : fetchedata, country : country})
    }
    async componentDidMount() {
        const fetchedata = await fetchdata();
        
        this.setState({
            data : fetchedata
        })
      
        
    }

    render() {
        const { data , country }= this.state
        return (
            <div className={style.container}>

                <img  src={image} className={style.image}/>

                <Cards passingdata={data}/>
                
                <Countrypicker handleCountryChange = {this.handleCountryChange}/>
                    
                <Chart data={data} country={country}/>

            </div>
        )
    }
}

export default App
