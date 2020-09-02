import React, {Component} from 'react';

const API_KEY_ACNQI = 'b0b87d0c01627bcf2d7bfcb98f04981055d39557'

class Map extends Component {
    componentDidMount() {
        const mapScript = document.createElement('script')
        mapScript.src = `http://cdn.leafletjs.com/leaflet-0.7.5/leaflet.js`
        window.document.body.appendChild(mapScript)

        mapScript.addEventListener('load', e => {
            this.createMap()
        })
    }

    createMap = () => {
        var  OSM_URL = 'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png';  
        var  OSM_ATTRIB = '&copy;  <a  href="http://openstreetmap.org/copyright">OpenStreetMap</a>  contributors';  
        var  osmLayer = window.L.tileLayer(OSM_URL,  {attribution:  OSM_ATTRIB});  
    
        var  WAQI_URL = `https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=${API_KEY_ACNQI}`;  
        var  WAQI_ATTR = 'Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>';  
        var  waqiLayer = window.L.tileLayer(WAQI_URL,  {attribution:  WAQI_ATTR});  
    
        var  map = window.L.map('map').setView([20.5937,  78.9629],  3);  
        map.addLayer(osmLayer).addLayer(waqiLayer);  
    }

    render () {
        return (
            <div  id='map'  style={{'height':'598px'}}  />  
        );
    }
}
export default Map;