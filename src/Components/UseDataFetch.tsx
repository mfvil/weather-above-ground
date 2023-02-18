import { useEffect, useState} from "react";
import axios from 'axios';

function useDataFetch(){
    const [locationData, setLocationData] = useState<any>();
    const [url, setUrl] = useState<string>(`https://dev.virtualearth.net/REST/v1/Locations/US`);

    useEffect(() => {
        async function fetchLocation (){
            const locationResult = await axios.get(url,);
            setLocationData(locationResult.data.resourceSets[0].resources[0].point.coordinates);
            console.log(url);
            console.log(locationData, "first");
 
        };
    
       
        fetchLocation();
      },[url]);
    return[{locationData, url}, setUrl]
}
export default useDataFetch;