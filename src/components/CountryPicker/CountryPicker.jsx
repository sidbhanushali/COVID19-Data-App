import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl, Paper} from '@material-ui/core'

import {getCountryList} from '../../coronaAPI'

import CountryPickerStyles from './CountryPicker.module.css'

 const CountryPicker=({handleCountryChange}) => {
    const [Countries, setCountries] = useState([]); 

    useEffect(()=>{
            const asyncUseEffect = async()=> {
            setCountries(await getCountryList() )
            }
        asyncUseEffect();
    },[setCountries]);


    console.log(Countries)

    return (
    <Paper className={CountryPickerStyles.component} variant='outlined' elevation={4} children={FormControl}>
           <NativeSelect defaultValue="global" onChange={(e)=>{handleCountryChange(e.target.value)}}>
           <option value=''> Global  </option>
            {Countries.map((country, i)=>(<option key={i} value={country}> {country} </option>))}
           </NativeSelect>  
    </Paper>
    )
}

export default CountryPicker