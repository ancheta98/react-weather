import React, { Component } from 'react'
import axios from 'axios'
import url from '../../utils'

class Weather extends Component {

    state= {
        location: '',
        high: '',
        low: '',
    };
    //simple get request to get today's forecast for los angeles
    //must change kelvin to fahrenheit and fix the decimal point to only two places
    getWeather() {
        axios.get(url)
        .then(response => this.setState({
            low: parseFloat(response.data.list[0].main.temp_min * 9/5 - 459.67).toFixed(2),
            high: parseFloat(response.data.list[0].main.temp_max * 9/5 - 459.67).toFixed(2),
            location: response.data.city.name,
        }))
    }
    //When the component is ready to mount, call the function to get the data
    componentWillMount() {
        this.getWeather();
    }

    

    render () {
        return (
            <div className="Card">
                <h1>{this.state.location}</h1>
                <h2>High: {this.state.high} | Low: {this.state.low}</h2>
            </div>
        )
    }
    
}


export default Weather;