import React from 'react';
import Title from './AirPollution/Title';
import Form from './AirPollution/Form';
import Display from './AirPollution/Display';
import DisplayStations from './AirPollution/DisplayStations';
import Header from './Header';
import axios from 'axios';
import dateFormat from 'dateformat';

const API_KEY_ACNQI = 'b0b87d0c01627bcf2d7bfcb98f04981055d39557'

class AirPollution extends React.Component {
    state = {
        stations: [],
        cityName: undefined,
        dominentpol: undefined,
        iaqi: undefined,
        aqi: undefined,
        time: undefined,
        error: undefined,
        color: undefined,
        text: undefined
    };

    requestStations = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value
        console.log(city)
        axios.get(`https://api.waqi.info/search/?keyword=${city}&token=${API_KEY_ACNQI}`).then( res => {
            const stations = res.data.data.map(obj => obj.station);
            this.setState({stations});
            console.log(this.state.stations);
        });
        
    }
    fetchAQI = (e) => {
        e.preventDefault();
        const station = e.target.elements.station.value
        console.log(station);
        this.setState({
            cityName: undefined,
            dominentpol: undefined,
            iaqi: undefined,
            aqi: undefined,
            time: undefined,
            error: undefined
        })
        axios.get(`https://api.waqi.info/feed/${station}/?token=${API_KEY_ACNQI}`).then(res => {
            if (res.data.data.aqi === null || res.data.data.aqi === "-"){
                this.setState({error: "No Data Available"})
            }
            else {
                const aqi = res.data.data.aqi
                const cityName = res.data.data.city.name
                const dominentpol = res.data.data.dominentpol
                const iaqi = res.data.data.iaqi
                let color
                let text
                let time = res.data.data.time.s
                time = dateFormat(time, 'mmmm dS yyyy, h:MM TT')
                console.log(aqi, cityName, dominentpol, iaqi, time)
                if (aqi > 300) {
                    text = "Hazardous"
                    color = "#7e0023"
                }
                else if (aqi <= 300 && aqi > 200) {
                    text = "Very Unhealthy"
                    color = "#660099"
                }
                else if (aqi <= 200 && aqi > 150) {
                    text = "Unhealthy"
                    color = "#cc0033"
                }
                else if (aqi <= 150 && aqi > 100) {
                    text = "Unhealthy to Sensitive Groups"
                    color = "#ff9933"
                }
                else if (aqi <= 100 && aqi > 50) {
                    text = "Moderate"
                    color = "#ffde33"
                }
                else if (aqi <= 50 && aqi > 0){
                    text = "Good"
                    color = "#009966"
                }
                this.setState({
                    aqi: aqi,
                    cityName: cityName,
                    dominentpol: dominentpol,
                    iaqi: iaqi,
                    time: time,
                    text: text,
                    color: color
            })
            }
            
        });
    }
    
    render() {
        return (
            <div style={{height: '100vh'}} >
                <div>
                    <Header />
                </div>
                <div className="container">
                    <div className="row margin-main">
                        <div className="col col-lg-6">
                            <Title />
                            <Form requestStations = {this.requestStations}/>
                            {this.state.stations.length === 0 ? null : <DisplayStations stations = {this.state.stations} fetchAQI = {this.fetchAQI} /> }
                        </div>
                        <div className="col col-lg-6">
                            <Display aqi={this.state.aqi} cityName={this.state.cityName} dominentpol={this.state.dominentpol} iaqi={this.state.iaqi} time={this.state.time} error={this.state.error} color={this.state.color} text={this.state.text}/>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}

export default AirPollution;