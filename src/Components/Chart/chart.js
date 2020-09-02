import React , {useState , useEffect} from 'react'
import {fetchDailyData } from '../../API'
import {Line ,  Bar} from 'react-chartjs-2'
import style from './chart.module.css'

import axios from 'axios'

function Chart({data : {confirmed , recovered , deaths}, country}) {

    const [ dailydata , setdailydata] = useState([])
    

    useEffect( () => {
        const fetchAPI = async () => {
            setdailydata(await fetchDailyData())
            //console.log(dailydata)
        }
        fetchAPI()

    },[])

    const linechart = (
        dailydata.length ? (
            <Line
            data = { {
                labels: dailydata.map(( { date })=> date),
                datasets: [{
                    data : dailydata.map(( { confirmed })=> confirmed),
                    label :  'Infected',
                    borderColor: "#3333ff",
                    fill : true,
                },{
                    data : dailydata.map(( { deaths })=> deaths),
                    label :  'Deaths',
                    borderColor: "red",
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill : true,
                }]
            }}
            />) : null
        
    )

    const barChart = (
        confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${country}` },
            }}
          />
        ) : null
      );
    return (
        <div className={style.container}>
            {country ? barChart : linechart}
        </div>
    )
}

export default Chart
