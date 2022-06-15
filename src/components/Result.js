import { useEffect } from "react";
import { ResultContainer } from "../cssComponents/Result";

export const ResultPage = ({ searchMethod, loading }) => {
  useEffect(() => {
    if (loading) {
      console.log("loading");
    }
  }, [loading]);

  return (
    <ResultContainer>

    </ResultContainer>
  );
};