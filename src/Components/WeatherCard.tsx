import React from 'react'

export interface WeatherProps{
       name?: string;
       shortForecast?: string;
       temperature?: any;
       temperatureUnit?: string;
       icon?: string;
       county?: string;
}

const WeatherCard = ({county, name, shortForecast, temperature, temperatureUnit, icon}:WeatherProps): JSX.Element => 
       <div className='flex items-center flex-col rounded-3xl bg-white p-4 shadow-md w-1/4 h-1/4 font-Inter border-2 border-black'>
              <h1 className='font-black'>Weather in {county} </h1>
              <div className='flex items-center flex-row'>
                     <div className='flex items-center flex-col mx-3'>
                            <p>{name}</p>
                            <img src={icon}/>
                            <p>{temperature} {temperatureUnit}</p>
                            <p>{shortForecast}</p>
                     </div>
   
              </div>
       </div>
    

export default WeatherCard;