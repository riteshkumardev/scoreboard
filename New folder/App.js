import logo from './logo.svg';
import './App.css';
import KathaDhur from './component/KathaDhur';
import EkarDismil from './component/EkarDismil';
import { Box, Grid, Paper } from '@mui/material';
import ColorToggleButton from './component/ColorToggleButton';
import { useSelector } from 'react-redux';
import AnimationPage from './component/AnimationPage';



function App() {
  const alignment = useSelector((el) => el.alignment);
  console.log(alignment,"alignment");
  return (
    <div  >
      <div style={{marginLeft:"23%",marginTop:"5%"}}>

      <ColorToggleButton/>
      </div>
 <Paper elevation={10}  sx={{margin:"3%",padding:"5%"}}>
 <AnimationPage/>

  {alignment=="Bigha Katha"?<KathaDhur/>:<EkarDismil/>}

  </Paper> 


   
  <Paper elevation={10}  sx={{margin:"3%",padding:"5%",marginTop:"10%"}}>
 

  {alignment=="Bigha Katha"?
 <EkarDismil/>:<KathaDhur/>}
 
 </Paper> 

 

        

        
    </div>
  );
}

export default App;
