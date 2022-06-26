import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { VINSearchAPI } from "../api/VinAPI";
import { FormContainer, FormText, MethodToggle, SearchContainer } from "../cssComponents/Search";

const APIHandler = async (vinMethod, setData, searchData) => {
  try {
    let data;
    if (vinMethod) {
      if (!searchData.vin)
        throw new Error("VIN is required");
      data = await VINSearchAPI(searchData.vin);
    } else {
      if (!searchData.model || !searchData.year)
        throw new Error("Model and Year are required");
      // data = await ModelYearSearchAPI(searchData.model, searchData.year);
    }
    if (data) {
      setData(data.model);
      console.log(data);
    }
  }
  catch (error) {
    console.log(error.message);
  };
};

export const SearchPage = ({ vinMethod, setVinMethod, setLoading, setData }) => {
  const [vin, setVin] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const handleSwitchChange = (event) => {
    setVinMethod(event.target.checked);
  };

  const clearSearch = () => {
    setVin("");
    setModel("");
    setYear("");
  };

  const SubmitHandler = async (event) => {
    event.preventDefault();
    let searchData = {
      vin: vin,
      model: model,
      year: year,
    }

    setLoading(true);
    await APIHandler(vinMethod, setData, searchData);
    setTimeout(() => {
      clearSearch();
      setLoading(false);
    }, 1250);
  };

  return (
    <SearchContainer>
      {vinMethod ?
        <>
          <div style={{ padding: '20px 5%' }}>
            <Typography variant="h3" component="h2">Search by VIN</Typography>
          </div>
        </>
        :
        <>
          <div style={{ padding: '20px 5%' }}>
            <Typography variant="h3" component="h2">Search by Model and Year</Typography>
          </div>
        </>
      }
      <FormContainer component="form">
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Make/Model</Typography>
          <MethodToggle
            checked={vinMethod}
            onChange={handleSwitchChange}
          />
          <Typography>VIN</Typography>
        </Stack>
        {vinMethod ?
          <VINSearch vin={vin} setVin={setVin} />
          :
          <ModelYearSearch
            model={model} setModel={setModel}
            year={year} setYear={setYear}
          />
        }
        <Button color="primary" disableElevation fullWidth variant="contained" onClick={SubmitHandler}>Submit</Button>
      </FormContainer>
    </SearchContainer>
  );
};

const VINSearch = ({ vin, setVin }) => {
  return (
    <>
      <FormText variant="filled" label="Search by VIN"
        value={vin}
        onChange={(e) => setVin(e.target.value)} />
    </>
  )
};

const ModelYearSearch = ({ model, setModel, year, setYear }) => {
  return (
    <>
      <FormText variant="filled" label="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)} />
      <FormText variant="filled" label="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)} />
    </>
  )
};