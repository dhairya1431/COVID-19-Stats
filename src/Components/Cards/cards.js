import React from 'react'
import { Card , CardContent , Typography , Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'
import style from './cards.module.css'

function cards({passingdata : {confirmed , recovered , deaths , lastupdate }}) {

    if(!confirmed ) {
        return 'Loading..'
    }

    return (
        <div className={style.container}>
            <Grid container spacing = {3} justify="center" >
                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.confirmed)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Infected </Typography>
                        <Typography variant="h5"> 
                        <CountUp
                            start = {0} end={confirmed.value} duration={2} separator=","
                        />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastupdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19 </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Recovered</Typography>
                        <Typography variant="h5"> 
                        <CountUp
                            start = {0} end={recovered.value}  duration={2} separator=","
                        />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastupdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recovories Of COVID-19 </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Deaths </Typography>
                        <Typography variant="h5">
                        <CountUp
                            start = {0} end={deaths.value}  duration={2} separator=","
                        />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastupdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths cause by the COVID-19 </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default cards
