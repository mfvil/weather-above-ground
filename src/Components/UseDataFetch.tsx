import React, { useEffect, useState} from "react";
import axios from 'axios';

function useDataFetch(){
    const [locationData, setLocationData] = useState<any>();
    const [url, setUrl] = useState<string>(`https://dev.virtualearth.net/REST/v1/Locations/US`);

    useEffect(() => {
        async function fetchLocation (){
            // try{
            const locationResult = await axios.get(url,);
            
                setLocationData(locationResult.data.resourceSets[0].resources[0].point.coordinates);
          
            // }catch(error) {
            //         if (error.response) {
            //           // The request was made and the server responded with a status code
            //           // that falls out of the range of 2xx
            //           console.log(error.response.data);
            //           console.log(error.response.status);
            //           console.log(error.response.headers);
                      
            //         }
            console.log(url);
            console.log(locationData, "first");
       // }
        };
    
       
        fetchLocation();
      }, [url]);
    return[{locationData, url}, setUrl]
}
export default useDataFetch;