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
              <h2 className='text-xl m-4'>{name} </h2>
              <div className='flex items-center flex-row'>
                     <div className='flex items-center flex-col mx-3'>
                            <img src={icon}/>
                            <p className='text-xl'>{temperature} {temperatureUnit}</p>
                            <p className='text-xl'>{shortForecast}</p>
                     </div>
   
              </div>
              </>
   
    

export default WeatherCard;