
import { BaseUrl } from '../helper/BaseUrl';
import { apiKey } from '../helper/ApiKey';
import axios from 'axios';
const FetchSimilarMovie=async (MovieId, Page)=>{
    try{
      const response=await axios.get(`${BaseUrl}/movie/${MovieId}/similar?`,{
        params:{
            language:"en-US",
            page:Page,
            api_key:apiKey
        }
      })
      console.log("Similar Movie",response)
      return response.data;
    }
    catch(Error)
    {
        throw Error;
    }

}
export default FetchSimilarMovie;