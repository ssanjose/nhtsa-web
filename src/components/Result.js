import { Grid, Skeleton, Typography } from "@mui/material";
import { useState } from "react";
import { ResultContainer, ResultItem } from "../cssComponents/Result";

export const ResultPage = ({ vinMethod }) => {
  const [loading, setLoading] = useState(false);

  return (
    <ResultContainer>
      <Result loading={loading} vinMethod={vinMethod} />
    </ResultContainer>
  );
};

const Result = ({ loading, data, vinMethod }) => {
  return (
    <>
      {loading ?
        <>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Skeleton variant="rectangular" width={222} height={56} />
            </Grid>
            <Grid item xs={9} />
            <Grid item xs={3}>
              <Skeleton variant="rectangular" width={222} height={56} />
            </Grid>
            <Grid item xs={9} />
            <Grid item xs={3}>
              <Skeleton variant="rectangular" width={222} height={56} />
            </Grid>
            <Grid item xs={3}>
              <Skeleton variant="rectangular" width={222} height={56} />
            </Grid>
            <Grid item xs={6} />
          </Grid>
        </>
        :
        <>
          <div style={{ padding: '20px 5%' }}>
            {vinMethod ?
              <Typography variant="h3" component="h2">Search by VIN</Typography>
              :
              <Typography variant="h3" component="h2">Search by Model and Year</Typography>
            }
          </div>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <ResultItem>
                <Typography variant="h4" component="h4">{data ? data.name : "---"}</Typography>
              </ResultItem>
            </Grid>
            <Grid item xs={9} />
            <Grid item xs={3}>
              <ResultItem>
                <Typography variant="h5" component="h5">VIN:</Typography>
                {data ? data.vin : "-"}
              </ResultItem>
            </Grid>
            <Grid item xs={9} />
            <Grid item xs={3}>
              <ResultItem>
                <Typography variant="h5" component="h5">Make:</Typography>
                {data ? data.make : "-"}
              </ResultItem>
            </Grid>
            <Grid item xs={3}>
              <ResultItem>
                <Typography variant="h5" component="h5">Model:</Typography>
                {data ? data.model : "-"}
              </ResultItem>
            </Grid>
            <Grid item xs={6} />
          </Grid>
        </>
      }
    </>
  )
};