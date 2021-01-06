interface PredictSentenceRequestPayload {
  query: string;
}

interface PredictSentenceResult {
  result: boolean | null;
  positive_percentage?: string;
  negative_percentage?: string;
}

export type { PredictSentenceRequestPayload, PredictSentenceResult };
