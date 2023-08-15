import { Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDismilRedux, setEkarRedux } from '../redux/action';

function EkarDismil() {
  const dispatch = useDispatch("");
  const data = useSelector((el) => el);
  const alignment = useSelector((el) => el.alignment);
  const [ekar, setEkar] = useState(""); // Initialize ekar to 1
  const [merge, setMerge] = useState("");
  const ekarredux = data.ekar;
  const dismilredux = data.dismil;

  useEffect(() => {
  
   
    const katha = data.katha;
    const bigha = data.bigha;
    const kanma = data.kanma * 0.013625;
    const dhur = data.dhur * 4.36 / 20;
    const showEker = katha * 4.36 + bigha * 20 * 4.36 + dhur + kanma;

    

    if (showEker >= 100) {
      // Increment the ekar value by 1 when merge is greater than or equal to 100
      const mergeInEkar = Math.floor(showEker / 100);
      const Dicr = mergeInEkar*100
      setEkar(mergeInEkar);
      setMerge(showEker-Dicr);
    }else{
      
      setEkar(0);
      setMerge(showEker);
    }
  }, [data, merge,ekar]);
  const handleNumericChange = (e, setter) => {
    const numericValue = e.target.value.replace(/[^0-9,]/g, '',); // Filter out non-numeric characters
    setter(numericValue);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="एकड़"
            label="एकड़"
            placeholder="एकड़"
            name="ekar"
            value={alignment == "Bigha Katha" ?ekar:ekarredux}
            onChange={(e) => handleNumericChange(e, (value) => dispatch(setEkarRedux(value)))}
            // InputProps={{
            //   readOnly: true, 
            // }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="डिसमिल"
            label="डिसमिल"
            placeholder="डिसमिल"
            name="dismil"
            value={alignment == "Bigha Katha"?merge:dismilredux}
            onChange={(e) => handleNumericChange(e, (value) => dispatch(setDismilRedux(value)))}
            // InputProps={{
            //   readOnly: true, 
            // }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default EkarDismil;
