import { Box, Switch, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const SearchContainer = styled((props) => (<Box
  {...props}
/>))(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.background.search,

  [theme.breakpoints.up('xs')]: {
    order: 1,
    minHeight: 'fit-content',
  },
  [theme.breakpoints.up('sm')]: {
    order: 2,
    height: "100%",
  },
}));

export const MethodToggle = styled((props) => (<Switch
  {...props}
/>))(({ theme }) => ({
  '& .MuiSwitch-input': {
    width: '100%',
  },
}));

export const FormContainer = styled((props) => (<Box
  {...props}
/>))(({ theme }) => ({
  height: 'fit-content',
  minHeight: '200px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [theme.breakpoints.up('xs')]: {
    padding: '0px 5% 0px 5%',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '20px 10% 0px 10%',
  },
}));

export const FormText = styled((props) => (<TextField
  {...props}
/>))(({ theme }) => ({
  width: '100%',
  marginBottom: '15px',
}));