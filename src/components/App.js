
import { Box, ScopedCssBaseline } from '@mui/material';
import { ThemeProvider } from "@mui/system";
import { ResultPage } from './Result';
import { lightTheme } from '../themes/light';
import { SearchPage } from './Search';
import { useEffect, useState } from 'react';
import { API } from '../api/APIConfig';

function App() {
  const [vinMethod, setVinMethod] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get('/ping')
      .catch(error => {
        console.log(error);
      })
  }, []);

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
            setVinMethod={setVinMethod}
            setLoading={setLoading}
            setData={setData} />
          <ResultPage
            vinMethod={vinMethod}
            data={data}
            loading={loading} />
        </Box>
      </ThemeProvider>
    </ScopedCssBaseline>
  );
}

export default App;
