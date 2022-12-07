import React, {useEffect, useState} from "react";
import axios from 'axios';
import WeatherCard from './WeatherCard.tsx';

interface SearchProps{
    value: string;

}


const Fetcher =({ value, }: SearchProps): JSX.Element =>{
    const [location, setLocation] = useState(value);
    const [locationData, setLocationData] = useState();
    const [weatherCoordinates, setWeatherCoordinates] = useState();
    const [weatherData, setWeatherData] = useState();
    const locationClient = axios.create({
        baseURL: "https://dev.virtualearth.net/REST/v1/Locations/US/" 
    });
    const weatherClient = axios.create({
        baseURL: "https://api.weather.gov/" 
    });

    const handleOnchage =(value: string) => {
        setLocation(value);
    }

useEffect(() => {
    async function fetchLocation (){
        // try{
        const locationResult = await axios.get(`https://dev.virtualearth.net/REST/v1/Locations/US/${location}?key=Atfcn0UhB-AMxmeAPpbwnFAkzRWeHukpBnAR7Jr7J5-fySVv1N_J-VAEU69whXfa`,);
            setLocationData(locationResult.data.resourceSets[0].resources[0].point.coordinates);
        // }catch(error) {
        //         if (error.response) {
        //           // The request was made and the server responded with a status code
        //           // that falls out of the range of 2xx
        //           console.log(error.response.data);
        //           console.log(error.response.status);
        //           console.log(error.response.headers);
                  
        //         }
        console.log(locationData, "first");
   // }
    };

   
    fetchLocation();
  }, [location]);

  useEffect(() => {
    async function fetchWeatherCoordinates() {
        // try{
        const weatherCoordinatesResult = await axios.get(`https://api.weather.gov/points/${locationData}`,);
        setWeatherCoordinates(weatherCoordinatesResult.data.properties.forecast);
    // }catch(error) {
    //     if (error.response) {
    //       // The request was made and the server responded with a status code
    //       // that falls out of the range of 2xx
    //       console.log(error.response.data);
    //       console.log(error.response.status);
    //       console.log(error.response.headers);
          
    //     }
        console.log(weatherCoordinates, "second");
    // } 
    };

   
    fetchWeatherCoordinates();
  }, [locationData]);


  useEffect(() => {
    async function fetchWeather() {
        // try{
        const weatherResult = await axios.get(`${weatherCoordinates}`,);
        setWeatherData(weatherResult.data.properties.periods);
    // }catch(error) {
    //     if (error.response) {
    //       // The request was made and the server responded with a status code
    //       // that falls out of the range of 2xx
    //       console.log(error.response.data);
    //       console.log(error.response.status);
    //       console.log(error.response.headers);
          
    //     }
        console.log(weatherData, "third");
    // } 
    };

   
    fetchWeather();
  }, [locationData]); 

 return(
    <>
<form className="">
<input className="rounded-3xl bg-white shadow-md p-2 m-4 border-2 border-black" 
 type="search" 
 value={location} 
 onChange={({ target }) => handleOnchage(target.value)} 
 placeholder="Enter zip code" />
</form>
<WeatherCard name={weatherData[0].name} shortForecast={weatherData[0].shortForecast} temperature={weatherData[0].temperature} temperatureUnit={weatherData[0].temperatureUnit} icon={weatherData[0].icon}/>
</>
 )

 }
export default Fetcher;