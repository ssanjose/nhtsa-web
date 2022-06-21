import { Box, Switch, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const SearchContainer = styled((props) => (<Box
  {...props}
/>))(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.background.search,
  display: 'flex',

  [theme.breakpoints.up('xs')]: {
    order: 1,
    height: 'fit-content',
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
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [theme.breakpoints.up('xs')]: {
    padding: '20% 5% 0px 5%',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '40% 10% 0px 10%',
  },
}));

export const FormText = styled((props) => (<TextField
  {...props}
/>))(({ theme }) => ({
  minWidth: '50%',
  width: 'fit-content',
  marginBottom: '15px',
}));