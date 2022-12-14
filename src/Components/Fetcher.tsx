import React, {Suspense, useEffect, useState} from "react";
import axios from 'axios';
import WeatherCard from './WeatherCard.tsx';
import useDataFetch from './UseDataFetch.tsx'
interface SearchProps{
    value: string;

}


const Fetcher =({ value, }: SearchProps): JSX.Element =>{
    const [location, setLocation] = useState(value);
    const [{locationData, url}, setUrl] = useDataFetch();
    const [weatherCoordinates, setWeatherCoordinates] = useState<any>();
    const [weatherData, setWeatherData] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleOnchage =(value: string) => {
        setLocation(value);
    }



  useEffect(() => {
    async function fetchWeatherCoordinates() {
        const weatherCoordinatesResult = await axios.get(`https://api.weather.gov/points/${locationData}`,);
        setWeatherCoordinates(weatherCoordinatesResult.data.properties.forecast);
        console.log(weatherCoordinates, "second");

    };

   
    fetchWeatherCoordinates();
  }, [locationData]);


  useEffect(() => {
    async function fetchWeather() {
        try{
            setIsLoading(true);
            setIsError(false);
        const weatherResult = await axios.get(`${weatherCoordinates}`,);
        setWeatherData(weatherResult.data.properties.periods);
    }catch(error) {
        if (error.response) {
            setIsLoading(false);
            setIsError(true);
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          
        }
        console.log(weatherData, "third");
    } 
    setIsLoading(false);
    };

   
    fetchWeather();
  }, [locationData]); 

 return(
    <>
    <div className="flex flex-row">
<form>
<input className="rounded-3xl bg-white shadow-md p-2 m-4 border-2 border-black" 
 type="text" 
 value={location} 
 onChange={({ target }) => handleOnchage(target.value)} 
 placeholder="Enter zip code" />
</form>
<button type="submit" className="rounded-3xl border-2 border-black p-2 m-4"
onClick={()=>{setUrl(`https://dev.virtualearth.net/REST/v1/Locations/US/${location}?key=Atfcn0UhB-AMxmeAPpbwnFAkzRWeHukpBnAR7Jr7J5-fySVv1N_J-VAEU69whXfa`)}}
>Search</button>
</div>
{weatherData ?(
 <div className='flex items-center flex-col rounded-3xl bg-white p-4 shadow-md w-1/4 h-1/4 font-Inter border-2 border-black'>
    {isLoading && <p>Loading....</p>}
    {isError  && <p>something went wrong</p>}
<WeatherCard name={weatherData[0].name} shortForecast={weatherData[0].shortForecast} temperature={weatherData[0].temperature} temperatureUnit={weatherData[0].temperatureUnit} icon={weatherData[0].icon}/>
</div>
):(null)}
</>
 )

 }
export default Fetcher;