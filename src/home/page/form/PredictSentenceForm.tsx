import {ReactComponent as SearchIcon} from "../../../core/ui/icons/search.svg";

import "./_predict-sentence-form.scss";

import React, {useState} from "react";
import {Button, Input} from "@hipo/react-ui-toolkit";

import Form from "../../../components/form/Form";
import axios from "axios";
import Result from "../result/Result";

const initialResultState = {
  result: null,
  positive_percentage: "",
  negative_percentage: ""
};

const apiRoot = process.env.REACT_APP_API_ROOT;
function PredictSentenceForm() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [result, setResult] = useState(initialResultState);
  const [error, setError] = useState("");

  return (
    <Form
      values={query}
      knownErrorKeys={["query"]}
      customClassName={"predict-sentence-form"}
      onSubmit={handleSubmit}>
      <p className={"predict-sentence-form-title"}>{"Turkish Sentimental Analysis"}</p>
      <Input
        isDisabled={isLoading}
        leftIcon={<SearchIcon className={"predict-sentence-form-input-query-icon"} />}
        placeholder={"Your sentence here..."}
        name={"query"}
        onChange={handleInputChange}
        customClassName={"predict-sentence-form-input-query"}
      />
      <Button
        isDisabled={query === ""}
        shouldDisplaySpinner={isLoading}
        type={"submit"}
        customClassName={"blue predict-sentence-submit-button"}>
        {"COMPUTE"}
      </Button>
      {error && <p className={"predict-sentece-form-error"}>{error}</p>}
      {result.result === true && <Result result={result} />}
      {result.result === false && <Result result={result} />}
    </Form>
  );

  function handleInputChange({currentTarget}: React.SyntheticEvent<HTMLInputElement>) {
    setQuery(currentTarget.value);
  }

  async function handleSubmit() {
    setIsLoading(true);
    await axios
      .post(`${apiRoot}`, {
        query: query
      })
      .then((res) => {
        setResult(res.data);
        setIsLoading(false);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setResult(initialResultState);
        setError("Unexpected error!");
        setIsLoading(false);
      });
  }
}

export default PredictSentenceForm;
