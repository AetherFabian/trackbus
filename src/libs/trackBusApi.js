const API = "https://track-bus-nevsoft.herokuapp.com/"; //API URL

export default class Http {

    //creating a static instance of the class
    static instance = new Http()

    //fetches data from the api to get the routes of buses
    get_routes = async() =>{
        try{
            const request = await fetch (`${API}routes`);
            const response = await request.json();
            //sort the data response
            response.sort(function (a, b) {
                if (a.bus_name > b.bus_name) {
                  return 1;
                }
                if (a.bus_name < b.bus_name) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });
            console.log(response);
            return response
        }catch(err){
            throw new Error(err);
        }
    }
    //fetch the signals of api, depending of the bus requested in src/views/maps.js
    get_signals = async(name)=> {
        try{
            const request = await fetch (`${API}signals/${name}`);
            const response = await request.json()
            console.log(response)
            return response
        }catch(err){
            throw new Error(err);
        }
    }
}
