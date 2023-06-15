const axios = require('axios');

export const fetchCars = async() => {
    const options = {
      method: 'GET',
      url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
      params: {model: 'corolla'},
      headers: {
        'X-RapidAPI-Key': '0ff48c075fmshb7c987c4fcc9618p1de89ajsnaaac69debfb9',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        // console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}
