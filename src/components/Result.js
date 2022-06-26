import { Grid, Skeleton, Typography } from "@mui/material";
import { useState } from "react";
import { ResultContainer, ResultItem, ResultMain } from "../cssComponents/Result";
import { ModelYearResultSkeleton, VINResultSkeleton } from "./skeletons/ResultSkeleton";
import { VINTips } from "./tips/SearchTips";

export const ResultPage = ({ loading, data, vinMethod }) => {
  return (
    <ResultContainer>
      <ResultMain>
        {vinMethod ?
          <>
            {loading ? <VINResultSkeleton /> : <VINResult data={data} />}
          </>
          :
          <>
            {loading ? <ModelYearResultSkeleton /> : <ModelYearResult data={data} />}
          </>
        }
      </ResultMain>
    </ResultContainer>
  )
};

const VINResult = ({ data }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ResultItem>
            <Typography variant="h4" component="h4">{data ? data.name : "---"}</Typography>
          </ResultItem>
        </Grid>
        <Grid item xs={7}>
          <ResultItem>
            <Typography variant="h5" component="h5">VIN:</Typography>
            {data ? data.vin : "-"}
          </ResultItem>
        </Grid>
        <Grid item xs={5} />
        <Grid item xs={4}>
          <ResultItem>
            <Typography variant="h5" component="h5">Make:</Typography>
            {data ? data.make : "-"}
          </ResultItem>
        </Grid>
        <Grid item xs={4}>
          <ResultItem>
            <Typography variant="h5" component="h5">Model:</Typography>
            {data ? data.model : "-"}
          </ResultItem>
        </Grid>
        <Grid item xs={4} />
      </Grid>
      <VINTips />
    </>
  )
};

const ModelYearResult = ({ data }) => {
  return (
    <>
    </>
  )
};
