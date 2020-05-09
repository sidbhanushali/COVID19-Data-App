import React, {useState, useEffect} from 'react'
import {getDailyData} from '../../coronaAPI'
import {Line, Bar} from 'react-chartjs-2'
import {Paper} from '@material-ui/core'

import ChartStyles from './Chart.module.css'

// destructure the data object within the props destructure to get the values
 const Chart = ({data: {confirmed, deaths, recovered}, country}) => {
// HOOKS
        const [dailyData, setDailyData] = useState([]); 

        useEffect(()=>{
               
                const asyncUseEffect = async () => {
                    setDailyData(await getDailyData() );
                }

            asyncUseEffect(); 
            
        }, []);




  // LINE CHART COMPONENT WITH DATA - REACT CHARTS JS  
        const lineChart = (
            // makes sure not to load the line chart without getting the data.map
                    dailyData.length?
                            <Line
                            data={{
                                labels: dailyData.map(({date})=>date),
                                datasets: [ 
                                    {data:  dailyData.map(({confirmed})=>confirmed),
                                    label: 'Confirmed',
                                    borderColor:'rgba(118, 0, 187, 0.6)',
                                    fill: true 
                                    },
                                    
                                    {
                                        data:  dailyData.map(({deaths})=>deaths),
                                        label: 'Deaths',
                                        borderColor:'red',
                                        backgroundColor: 'rgba(254, 0 , 0, 0.5)',
                                        fill: true
                                    }
                                ]
                            }} 
                            />:null 

        ); 


 // BAR CHART COMPONENT WITH DATA REACT CHARTS JS 
const barChart = (
    confirmed?
    <Bar
    data={{
        labels: ['Confirmed', 'Recovered', 'Deaths'],
        datasets: [{label: 'People',
         backgroundColor: [
            'rgba(118, 0, 187, 0.6)',
            'rgba(5, 124, 45, 0.6)',
            'rgba(235, 0, 0, 0.6)'
                 ],
         data: [ confirmed.value, recovered.value, deaths.value]       
                }]
            }}
    
     options={{
         legend: {display: false},
         title:  {display: true, text: `Current Statistics form ${country}`}
     }}
     />
    :null
);




//  RETURNED FUNCTION JSX 
    return (
        <div className={ChartStyles.container}>
            <Paper className={ChartStyles.container} elevation={6}>
                 {country?barChart:lineChart}
                 </Paper>
        </div>
    )
}

export default Chart