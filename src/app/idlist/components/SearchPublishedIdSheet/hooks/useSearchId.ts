import { Reducer, useReducer } from "react";
type State = {
  query: string;
  minIdQuery: string;
  maxIdQuery: string;
  result: number[];
  ids: number[];
};

type Action =
  | {
      type: "changed_query";
      query: string;
    }
  | {
      type: "changed_minIdQuery";
      minIdQuery: string;
    }
  | {
      type: "changed_maxIdQuery";
      maxIdQuery: string;
    };

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "changed_query": {
      const nextState = { ...state };
      const nextQuery = action.query;
      const nextResult =
        nextQuery === ""
          ? []
          : state.ids.filter((id) => id === Number(nextQuery));
      nextState.result = nextResult;
      nextState.query = nextQuery;
      return nextState;
    }
    case "changed_minIdQuery": {
      return state;
    }
    case "changed_maxIdQuery": {
      return state;
    }
    default: {
      return { ...state };
    }
  }
};

export const useSearchId = (ids: number[]) =>
  useReducer(reducer, {
    query: "",
    minIdQuery: "",
    maxIdQuery: "",
    result: [],
    ids: ids,
  });
