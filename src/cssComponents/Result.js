import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const ResultContainer = styled((props) => (
  <Box
    {...props}
  />))(({ theme }) => ({
    height: "100%",
    backgroundColor: theme.palette.background.default,

    [theme.breakpoints.up('xs')]: {
      flex: 1,
      order: 2,
    },
    [theme.breakpoints.up('sm')]: {
      flex: 2,
      order: 1,
    },
  }));