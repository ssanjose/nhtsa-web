import { createTheme, makeStyles } from "@mui/material";

export const lightTheme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: `${theme.palette.text.primary} !important`,
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: `${theme.palette.background.input} !important`,

          '& MuiFilledInput-root::after': {
            borderBottom: `5px solid ${theme.palette.text.primary}`,
          },

          '&.Mui-focused': {
            color: theme.palette.text.primary,
            '& MuiFilledInput-root::after': {
              borderBottom: `3px solid ${theme.palette.text.default}`,
            },
          },
        }),
      },
    }

  },
  palette: {
    text: {
      default: '#FAFAFA',
      reverseprimary: '#FFF',
      contrast: '#56ffef !important',
    },
    background: {
      search: '#D3E4FF',
      input: '#EAF2FF',
      gray: '#FAFAFA !important',
    },
    action: {
      active: '#56ffef',
    },
  }
});