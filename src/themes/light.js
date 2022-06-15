import { createTheme, makeStyles } from "@mui/material";

export const lightTheme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.gray,
          '&.Mui-focused': {
            color: theme.palette.text.default,
          },
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.gray,
          },

          '&.Mui-focused': {
            color: theme.palette.text.gray,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.text.default,
            },
          },
        }),
      },
    }

  },
  palette: {
    primary: {
      main: '#FAFAFA',
    },
    text: {
      reverseprimary: '#FFF',
      gray: '#FAFAFA !important',
      contrast: '#56ffef !important',
    },
    background: {
      search: '#1363DF',
      input: '#44A1FF',
      gray: '#FAFAFA !important',
    },
    action: {
      active: '#56ffef',
    },
  }
});