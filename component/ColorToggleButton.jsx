import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDispatch } from 'react-redux';
import { setAlignmentRedux } from '../redux/action';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('Bigha Katha');
const dispatch=useDispatch()
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    dispatch(setAlignmentRedux(newAlignment))
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton color='secondary' type='button' value="Bigha Katha"><span style={{fontWeight:"bold"}}>Bigha Katha</span></ToggleButton>
      <ToggleButton value="Eker Dismil"> <span style={{fontWeight:"bold"}}>Ekar Dismil</span></ToggleButton>
   
    </ToggleButtonGroup>
  );
}