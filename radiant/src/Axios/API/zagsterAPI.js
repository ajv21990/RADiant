import axios from 'axios'

export default class ZagsterAPI {
    static Zag(ZagSuccess, ZagError) {
        axios.get("https://opendata.arcgis.com/datasets/167bb084757842daa22a56023759c995_14.geojson")
            .then(ZagSuccess)
            .catch(ZagError)
    }
}