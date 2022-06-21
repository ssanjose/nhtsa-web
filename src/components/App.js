
import { Box, ScopedCssBaseline } from '@mui/material';
import { ThemeProvider } from "@mui/system";
import { ResultPage } from './Result';
import { lightTheme } from '../themes/light';
import { SearchPage } from './Search';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SearchCar = (vinMethod, reqData, data) => {
  if (vinMethod) {
    axios.get(`${process.env.REACT_APP_API_URL}/api/${process.env.API_VERSION}
        /model?make=${reqData.make}&year=${reqData.year}`)
      .then(res => {
        console.log(res.data.message);
      }).catch(error => {
        console.log(error);
      })
  }
};

function App() {
  const [vinMethod, setVinMethod] = useState(false);

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/api/v1/ping`)
  //     .then(res => {
  //       console.log(res.data.message);
  //     }).catch(error => {
  //       console.log(error);
  //     })
  // }, []);

  return (
    <ScopedCssBaseline enableColorScheme>
      <ThemeProvider theme={lightTheme}>
        <Box sx={{
          display: { xs: "block", sm: "flex" },
          flexDirection: { xs: "column", sm: "row" },
          height: "100vh",
        }}>
          <SearchPage
            vinMethod={vinMethod}
            setVinMethod={setVinMethod} />
          <ResultPage
            vinMethod={vinMethod}
            setVinMethod={setVinMethod} />
        </Box>
      </ThemeProvider>
    </ScopedCssBaseline>
  );
}

export default App;
