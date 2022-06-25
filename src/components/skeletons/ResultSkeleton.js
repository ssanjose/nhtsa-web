import { Grid, Skeleton } from "@mui/material";
import { ResultItem } from "../../cssComponents/Result";
import { VINTips } from "../tips/SearchTips";

export const VINResultSkeleton = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ResultItem>
            <Skeleton variant="rectangular" height={51} />
          </ResultItem>
        </Grid>
        <Grid item xs={5}>
          <ResultItem>
            <Skeleton variant="rectangular" height={51} />
          </ResultItem>
        </Grid>
        <Grid item xs={5} />
        <Grid item xs={4}>
          <ResultItem>
            <Skeleton variant="rectangular" height={51} />
          </ResultItem>
        </Grid>
        <Grid item xs={4}>
          <ResultItem>
            <Skeleton variant="rectangular" height={51} />
          </ResultItem>
        </Grid>
        <Grid item xs={4} />
      </Grid>
      <VINTips />
    </>
  )
};

export const ModelYearResultSkeleton = () => {
  return (
    <>
    </>
  )
};