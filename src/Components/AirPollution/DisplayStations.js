import React from 'react';

const createOptions = (station) => {
    const options = []
    for(let i = 0; i < station.length; i++){
        if (station[i].url.length !== 0) {
            options.push(<option key={i} value={station[i].url}>{station[i].name.split(",", 2)}</option>);
            // console.log(props[i].url.length);
        }
    }
    return options
}

const DisaplyStations = ({stations, fetchAQI}) => {
    return (
        <form onSubmit={fetchAQI}>
                <select name="station">
                    {createOptions(stations)}
                </select>
            <button>Get AQI</button>
        </form>
    );
}

export default DisaplyStations;