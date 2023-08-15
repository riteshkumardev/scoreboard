import { Box, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBigha, setDhur, setKanma, setKatha } from '../redux/action';

function KathaDhur() {
  const data = useSelector((state) => state);
  const { bigha, katha, dhur, kanma,ekar,dismil,alignment } = data;
  const dispatch = useDispatch();
  const [ekarBigha, setekarBigha] = useState("");
  const handleNumericChange = (e, setter) => {
    const numericValue = e.target.value.replace(/[^0-9,]/g, '',); // Filter out non-numeric characters
    setter(numericValue);
  };
  const handleNumericChangeKanma = (e, setter) => {
    const numericValue = e.target.value.replace(/[^0-9,.]/g, '',); // Filter out non-numeric characters
    setter(numericValue);
  };
  useEffect(() => {
  
   
    
    setekarBigha( Math.floor(ekar*100*4.36/20));
   
    

  }, [ekarBigha,bigha]);

  return (
    <div>
      <Box
        component="form"
        // sx={{
        //   '& .MuiTextField-root': { m: 1, width: '25ch' },
        // }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2} >
        <Grid item xs={6}>
        <TextField
            id="बीघा"
            label="बीघा"
            placeholder="बीघा"
            multiline
            maxRows={4}
            name="Bigha"
            type="text"
            value={alignment !=="Bigha Katha"?ekarBigha:bigha}
            onChange={(e) => handleNumericChange(e, (value) => dispatch(setBigha(value)))}
          />
        </Grid>
        <Grid item xs={6}>
        <TextField
            id="कट्ठा"
            label="कट्ठा"
            placeholder="कट्ठा"
            name="katha"
            type="text"
            multiline
            value={katha}
            onChange={(e) => handleNumericChange(e, (value) => dispatch(setKatha(value)))}
          />
        </Grid>
        <Grid item xs={6}>
        <TextField
            id="धुर"
            label="धुर"
            placeholder="धुर"
            name="Dhur"
            type="text"
            value={dhur}
            onChange={(e) => handleNumericChange(e, (value) => dispatch(setDhur(value)))}
            multiline
          />
        </Grid>
        <Grid item xs={6}>
        <TextField
            id="कनमा"
            label="कनमा"
            placeholder="कनमा"
            name="Kanma"
            type="text"
            value={kanma}
            onChange={(e) => handleNumericChangeKanma(e, (value) => dispatch(setKanma(value)))}
            multiline
          />
        </Grid>
        </Grid>
      
      </Box>
    </div>
  );
}

export default KathaDhur;
