import React , {useState , useEffect} from 'react'
import { NativeSelect , FormControl } from '@material-ui/core'
import style from './countrypicker.module.css'
import {fetchCountries} from '../../API'
import axios from 'axios'

export default function Countrypicker({handleCountryChange}) {
   // const [fetchedCountries , setfetchedCountries] = useState([])
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      const fetchAPI = async () => {
        setCountries(await fetchCountries());
      };
      console.log(countries)
      fetchAPI();
    }, []);

    
    return (
        <div>
            <FormControl className={style.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="global">Global</option>
                    {
                            countries.map((country, i) => <option key={i} value={country}>{country}</option>)
                    }
                </NativeSelect>
            </FormControl>
        </div>
    )
}
