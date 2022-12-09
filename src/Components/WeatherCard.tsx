import React from 'react'

export interface WeatherProps{
       name?: string;
       shortForecast?: string;
       temperature?: any;
       temperatureUnit?: string;
       icon?: string;
}

const WeatherCard = ({name, shortForecast, temperature, temperatureUnit, icon}:WeatherProps): JSX.Element =>
      
              <>
              <h2>{name} </h2>
              <div className='flex items-center flex-row'>
                     <div className='flex items-center flex-col mx-3'>
                            <img src={icon}/>
                            <p>{temperature} {temperatureUnit}</p>
                            <p>{shortForecast}</p>
                     </div>
   
              </div>
              </>
   
    

export default WeatherCard;