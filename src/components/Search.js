import { FormContainer, FormText, SearchContainer } from "../cssComponents/Search";

export const SearchPage = ({ searchMethod, loading }) => {
  return (
    <SearchContainer>
      <FormContainer component="form">
        <FormText variant="outlined" label="Search by VIN" />
        <FormText variant="outlined" label="Search by VIN" />
      </FormContainer>
    </SearchContainer>
  );
};