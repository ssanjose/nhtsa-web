
import { Box, ScopedCssBaseline } from '@mui/material';
import { ThemeProvider } from "@mui/system";
import { ResultPage } from './Result';
import { lightTheme } from '../themes/light';
import { SearchPage } from './Search';

function App() {
  return (
    <ScopedCssBaseline enableColorScheme>
      <ThemeProvider theme={lightTheme}>
        <Box sx={{
          display: { xs: "block", sm: "flex" },
          flexDirection: { xs: "column", sm: "row" },
          height: "100vh",
        }}>
          <SearchPage />
          <ResultPage />
        </Box>
      </ThemeProvider>
    </ScopedCssBaseline>
  );
}

export default App;
