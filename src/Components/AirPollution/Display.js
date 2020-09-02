import React from 'react';

const Display = ({aqi, cityName, dominentpol, iaqi, time, error, text, color}) => {
    if (aqi && cityName && dominentpol && iaqi) {
        return (
            <div className="card shadow col-lg-12 pt-3 pb-3 card-box">
                <div className="col-lg-12 mb-1 pl-3">
                    <h5 className="card-title">{cityName.split(",", 2)}</h5>
                </div>
                <div className="row ml-1 mr-1">
                    <div className="col d-flex justify-content-center col-lg-3 align-items-center aqi-div" style={{backgroundColor: color, borderRadius: 5}}>
                        <h2 className="text-white">{aqi}</h2>
                    </div>
                    <div className=" col col-lg-9">
                        <h3 className="m-0">{text}</h3>
                        <p className="m-0">Updated: {time}</p>
                        <p className="m-0">Primary pollutant: {dominentpol}</p>
                    </div>
                </div> <hr />
                <div>
                    <div className="row text-center">
                        {iaqi.pm25? <div className="col-lg-6 mb-2">PM25: {iaqi.pm25.v} &micro;g/m<sup>3</sup></div>: <div className="col-lg-6 mb-2">--</div>}
                        {iaqi.no2 ? <div className="col-lg-6 mb-2 ">NO2: {iaqi.no2.v} &micro;g/m<sup>3</sup></div>: <div className="col-lg-6 mb-2 ">--</div>}
                    </div>
                    <div className="row text-center">
                        {iaqi.o3 ? <div className="col-lg-6 mb-2">O3: {iaqi.o3.v} &micro;g/m<sup>3</sup></div>: <div className="col-lg-6 mb-2">--</div>}
                        {iaqi.pm10 ? <div className="col-lg-6 mb-2 ">PM10: {iaqi.pm10.v} &micro;g/m<sup>3</sup></div>: <div className="col-lg-6 mb-2 ">--</div>}
                    </div>
                    <div className="row text-center">
                        {iaqi.co ? <div className="col-lg-6 mb-2">CO: {iaqi.co.v} &micro;g/m<sup>3</sup></div>: <div className="col-lg-6 mb-2">--</div>}
                        {iaqi.so2 ? <div className="col-lg-6 mb-2 ">SO2: {iaqi.so2.v} &micro;g/m<sup>3</sup></div>: <div className="col-lg-6 mb-2 ">--</div>}
                    </div>
                </div>
            </div>
        );
    }
    else if (error) {
        return (
            <h2>{error}</h2>
        );
    }
    else {
        return (
            null
        );
    }
    
}

export default Display;