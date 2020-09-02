import React from 'react';

const Form = ({requestStations}) => {
    return (
        <form onSubmit={requestStations}>
            <input className="input-tag" placeholder="Enter City" name="city" required/>
            {/* <input placeholder="Enter State" name="state"/>
            <input placeholder="Enter Country" name="country"/> */}
            <button>Get Stations</button>
        </form>    
    );
}

export default Form;