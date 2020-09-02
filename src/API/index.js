import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export  const fetchdata = async (country) => {

  let changedurl = url;
  if(country && country !== 'global') {
    changedurl = `${url}/countries/${country}`
  }

    try {
        const { data : { confirmed , recovered , deaths , lastUpdate} }  = await axios.get(changedurl)

        const newdata = {
            confirmed : confirmed,
            recovered: recovered,
            deaths: deaths,
            lastupdate: lastUpdate,
        }

        return newdata;
    } catch (error) {
        
    }
}

const url1 = 'https://covid19.mathdro.id/api/daily'
export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(url1);
  
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return error;
    }
  }

  export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };
