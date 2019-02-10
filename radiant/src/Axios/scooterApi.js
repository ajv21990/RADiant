import axios from "axios";

const locations = {
  latitude: 33.77005,
  longitude: -118.193741,
  altitude: 500,
  accuracy: 100,
  speed: -1,
  heading: -1
};
var locate = JSON.stringify(locations);

class ScooterApi {
  static GetAllScooterLocations(onGetScooterSuccess, onGetScooterError) {
    axios
      .get(
        "https://api.bird.co/bird/nearby?latitude=33.770050&longitude=-118.193741&radius=5000",

        {
          //   headers: headers
          headers: {
            Authorization:
              "Bird eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBVVRIIiwidXNlcl9pZCI6ImVmYWYyODIwLWRlNGQtNDNmYi1iNjI4LTk5ZWQzZDY5YTBlOCIsImRldmljZV9pZCI6IjM4NDZiYTJmLTM5NTktNDdmMy1iMDg5LWE5YTk1MGExNDg2YyIsImV4cCI6MTU4MTI4NTk4M30.lDf1QS_xXI-KhcAXP9nMl-8IEYYXFT7blXi6jTHtYxE",
            Location: locate,
            "Device-id": "55128b2e-059c-4632-8cf4-01fe5470fa38",
            "App-Version": "3.0.5"
          }
        }
      )
      .then(onGetScooterSuccess)
      .catch(onGetScooterError);
  }
}

export default ScooterApi;
