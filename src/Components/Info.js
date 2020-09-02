import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Info = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <section className="container info-container">
                <div style={{"border": "2px solid black"}} className="mt-5 mb-3">
                    <table cellPadding="5px;" cellSpacing="3px;"> 
                        <thead> 
                            <tr> 
                                <td>AQI</td>
                                <td>Air Pollution Level</td>
                                <td>Health Implications</td>
                                <td>Cautionary Statement (for PM2.5)</td> 
                            </tr> 
                        </thead> 
                        <tbody>
                            <tr style={{"background-color":"#009966"}} className="text-white"> 
                                <td nowrap="true">0 - 50</td> 
                                <td>Good</td> 
                                <td>Air quality is considered satisfactory, and air pollution poses little or no risk</td> 
                                <td>None</td> 
                            </tr> 
                            <tr style={{"background-color":"#ffde33"}}> 
                                <td nowrap="true">51 -100</td> 
                                <td>Moderate</td> 
                                <td>Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.</td> 
                                <td>Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</td> 
                            </tr> 
                            <tr style={{"background-color":"#ff9933"}}> 
                                <td nowrap="true">101-150</td> 
                                <td>Unhealthy for Sensitive Groups</td> 
                                <td>Members of sensitive groups may experience health effects. The general public is not likely to be affected.</td> 
                                <td>Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</td> 
                            </tr> 
                            <tr style={{"background-color":"#cc0033"}} className="text-white"> 
                                <td nowrap="true">151-200</td> 
                                <td>Unhealthy</td> 
                                <td>Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects</td> 
                                <td>Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion</td> 
                            </tr> 
                            <tr style={{"background-color":"#660099"}} className="text-white"> 
                                <td nowrap="true">201-300</td> 
                                <td>Very Unhealthy</td> 
                                <td>Health warnings of emergency conditions. The entire population is more likely to be affected.</td> 
                                <td>Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.</td> 
                            </tr> 
                            <tr style={{"background-color":"#7e0023"}} className="text-white">
                                <td nowrap="true">300+</td> 
                                <td>Hazardous</td> 
                                <td>Health alert: everyone may experience more serious health effects</td> <td class='aqiwtxt'>Everyone should avoid all outdoor exertion</td> 
                            </tr>
                        </tbody> 
                    </table>
                </div>
                <div>
                    <h5>For more information about the pollutants included in the AQI scale, please refer to: </h5>
                    <ol>
                        <li>
                            <a rel="noopener noreferrer" href="http://aqicn.org/faq/2015-03-15/air-quality-nowcast-a-beginners-guide/" target="_blank" className="anchor-tags">PM2.5 instant-cast scale.</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="http://aqicn.org/faq/2013-02-02/why-is-pm25-often-higher-than-pm10/" target="_blank" className="anchor-tags">Understanding PM10 vs PM2.5.</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="http://aqicn.org/faq/2016-08-10/ozone-aqi-scale-update/" target="_blank" className="anchor-tags">Ozone (O3) AQI scale.</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="http://aqicn.org/faq/2016-11-20/nitrogen-dioxyde-no2-in-our-atmosphere" target="_blank" className="anchor-tags">Nitrogen Dioxide (NO2) scale.</a>
                        </li>
                    </ol>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Info;