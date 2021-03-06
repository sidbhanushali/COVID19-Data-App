import React from "react";
import { Typography, Grid } from "@material-ui/core";
import CardComponent from "./Card/Card";
import styles from "./Cards.module.css";

const Info = ({
  //destructure props from App comp
  data: { confirmed, recovered, deaths, lastUpdate },
  country,
}) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Typography gutterBottom variant='h4' component='h2'>
        {country}
      </Typography>
      <Grid container spacing={3} justify='center'>
        <CardComponent
          className={styles.infected}
          cardTitle='Infected'
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle='Number of total cases from COVID-19.'
        />
        <CardComponent
          className={styles.recovered}
          cardTitle='Recovered'
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle='Number of recoveries from COVID-19.'
        />
        <CardComponent
          className={styles.deaths}
          cardTitle='Deaths'
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle='Number of deaths caused by COVID-19.'
        />
      </Grid>
    </div>
  );
};

export default Info;
