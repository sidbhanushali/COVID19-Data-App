import React from 'react'

import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CardStyles from  './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'


 const Cards= ({data: {confirmed, recovered, deaths, lastUpdate} }) => {

if(!confirmed){
    return '🦠...Loading...🦠'
}


console.log(confirmed.value, recovered.value, deaths.value, lastUpdate);

    return (
        <div className={CardStyles.container}>
            <Grid container justify='center' alignItems='center' spacing={4}>
                    {/* Comfirmed CASES CARD  */}
                        <Grid item xs ={12} md={3} component={Card} className={cx(CardStyles.card, CardStyles.confirmed)}>
                            <CardContent>
                                <Typography gutterBottom color='textSecondary'> Confirmed  </Typography>
                                <Typography variant='h5'> 
                                <CountUp  start={0} end={confirmed.value} separator=',' duration ={2.8}/>     
                                   </Typography>
                                <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()} </Typography>
                                <Typography variant='body2'> Number of comfirmed COVID-19 cases </Typography>
                            </CardContent> 
                        </Grid>


                        {/* RECOVERED  */}
                        <Grid item xs ={12} md={3} component={Card} className={cx(CardStyles.card, CardStyles.recovered)}>
                            <CardContent>
                                <Typography gutterBottom color='textSecondary'> Recovered </Typography>
                                <Typography variant='h5'> 
                                <CountUp  start={0} end={recovered.value} separator=',' duration ={2.8}/>    
                                 </Typography>
                                <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()} </Typography>
                                <Typography variant='body2'> Number of recovered COVID-19 Cases </Typography>
                            </CardContent> 
                        </Grid>
 
                        {/* DEATHS  */}
                        <Grid item xs ={12} md={3} component={Card} className={cx(CardStyles.card, CardStyles.deaths)}>
                            <CardContent>
                                <Typography gutterBottom color='textSecondary'> Deaths </Typography>
                                <Typography variant='h5'> 
                                        <CountUp  start={0} end={deaths.value} separator=',' duration ={2.8}/>   
                                 </Typography>
                                <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()} </Typography>
                                <Typography variant='body2'> Number of recorded deaths from COVID-19  </Typography>
                            </CardContent> 
                        </Grid>
    
           </Grid>
        </div>
    )
}

export default Cards