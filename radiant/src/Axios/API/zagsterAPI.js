import axios from 'axios'

export default class ZagsterAPI {
    static Zag(ZagSuccess, ZagError) {
        axios.get("https://zapi.zagster.com/api/v1/bikeshares/eDQqvDoJ5uuJsXzBHFmBmNvc/stations")
            .then(ZagSuccess)
            .catch(ZagError)
    }
}