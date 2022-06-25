import { Grid } from "@mui/material";
import { ResultItem } from "../../cssComponents/Result";

export const VINTips = () => {
  return (
    <Grid item xs={12}>
      <ResultItem>
        You can get a random VIN by clicking <a target="_blank" href="https://vingenerator.org//">here</a>.
      </ResultItem>
    </Grid>
  )
};