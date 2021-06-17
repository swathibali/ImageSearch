import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID -jgPX0jB5xg4G8BHw176eGwk_VnZbAs-vYSbDLt8rgM'
      }
});