import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, Paper } from "@material-ui/core";
import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <Paper>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=''
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value=''>Global</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Paper>
  );
};

export default Countries;
