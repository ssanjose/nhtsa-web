import { Stack, Typography } from "@mui/material";
import { FormContainer, FormText, MethodToggle, SearchContainer } from "../cssComponents/Search";

export const SearchPage = ({ vinMethod, setVinMethod }) => {
  const handleSwitchChange = (event) => {
    setVinMethod(event.target.checked);
    // setLoading(true);

    // setTimeout(() => {
    //   setLoading(false);
    // }, 500);
  };

  return (
    <SearchContainer>
      <FormContainer component="form">
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Make/Model</Typography>
          <MethodToggle
            checked={vinMethod}
            onChange={handleSwitchChange}
          />
          <Typography>VIN</Typography>
        </Stack>
        {vinMethod ? <VINSearch /> : <ModelYearSearch />}
      </FormContainer>
    </SearchContainer>
  );
};

const VINSearch = () => {
  return (
    <>
      <FormText variant="filled" label="Search by VIN" />
    </>
  )
};

const ModelYearSearch = () => {
  return (
    <>
      <FormText variant="filled" label="Model" />
      <FormText variant="filled" label="Year" />
    </>
  )
};