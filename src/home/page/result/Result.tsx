import "./_result.scss";

import React from "react";
import {PredictSentenceResult} from "../api/predictApiModels";

interface ResultProps {
  result: PredictSentenceResult;
}

function Result({result}: ResultProps) {
  return (
    <div className={"result-card"}>
      <div className={"result-card-header"}>
        <p className={"result-card-header-tag"}>{"TAG"}</p>
        <p className={"result-card-header-confidence"}>{"CONFIDENCE"}</p>
      </div>

      {result.result ? (
        <div className={"result-card-item"}>
          <p className={"result-card-item-tag-positive"}>{"POSITIVE"}</p>
          <p className={"result-card-item-confidence"}>{result.positive_percentage}</p>
        </div>
      ) : (
        <div className={"result-card-item"}>
          <p className={"result-card-item-tag-negative"}>{"NEGATIVE"}</p>
          <p className={"result-card-item-confidence"}>{result.negative_percentage}</p>
        </div>
      )}
    </div>
  );
}

export default Result;
