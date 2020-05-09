import axios from 'axios'


// DESTRUCTRE THE API CALLS 


// DATA FOR CARDS 
export const getData  = async (country) => {
  let URL = 'https://covid19.mathdro.id/api'
  let dynamicURL = URL 
    if (country) {
      dynamicURL = `${URL}/countries/${country}`
    }

    try {
        const {data: {confirmed, recovered, deaths, lastUpdate} } =  await axios.get(dynamicURL);
        return {confirmed,recovered,deaths,lastUpdate,}
        
    } catch (error) {
      console.log(error);
    }

} 

// DATA FOR CHART
export const getDailyData = async () => {
  try {
        const {data} = await axios.get('https://covid19.mathdro.id/api/daily')
        // Data is in multiple arrays so have to map it
        const mappedData = data.map((arrData)=>({
          confirmed: arrData.confirmed.total,
          deaths: arrData.deaths.total,
          date: arrData.reportDate, 
        }));

        return mappedData; 

  } catch (error) { 
    console.log(error);
  
  }

}


// DATA FOR COUNTRY PICKER 

export const getCountryList = async () => {
  try {
    const {data:{countries}} = await axios.get('https://covid19.mathdro.id/api/countries')

      return countries.map((country)=>country.name)
    
  } catch (error) {
    console.log(error);
    }
}