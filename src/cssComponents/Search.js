import { Box, TextField } from "@mui/material";
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

export const FormContainer = styled((props) => (<Box
  {...props}
/>))(({ theme }) => ({
  height: 'fit-content',
  width: '100%',
  padding: '40% 10% 0px 10%',
}));

export const FormText = styled((props) => (<TextField
  {...props}
/>))(({ theme }) => ({
  minWidth: '50%',
  width: 'fit-content',
  marginBottom: '15px',
}));