import { Reducer, useReducer } from "react";
import { Id as _Id } from "@/db";

type Id = Required<_Id>;

type State = {
  query: string;
  minIdQuery: string;
  maxIdQuery: string;
  result: Id[];
  ids: Id[];
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

const filterByQuery = (ids: Id[], query: string): Id[] => {
  return query === "" ? [...ids] : ids.filter((id) => id.id === Number(query));
};

const filterByMinId = (ids: Id[], min: string): Id[] => {
  return min === "" ? [...ids] : ids.filter((id) => id.id >= Number(min));
};

const filterByMaxId = (ids: Id[], max: string): Id[] => {
  return max === "" ? [...ids] : ids.filter((id) => id.id <= Number(max));
};

const filterByAll = (ids: Id[], query: string, min: string, max: string) => {
  if (query === "" && min === "" && max === "") return [];
  const filtered1 = filterByQuery(ids, query);
  const filtered2 = filterByMinId(filtered1, min);
  const filtered3 = filterByMaxId(filtered2, max);
  return filtered3;
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "changed_query": {
      const nextState = { ...state };
      const nextQuery = action.query;
      const nextResult = filterByAll(
        state.ids,
        nextQuery,
        state.minIdQuery,
        state.maxIdQuery
      );
      nextState.result = nextResult;
      nextState.query = nextQuery;
      return nextState;
    }
    case "changed_minIdQuery": {
      const nextState = { ...state };
      const nextMinIdQuery = action.minIdQuery;

      const nextResult = filterByAll(
        state.ids,
        state.query,
        nextMinIdQuery,
        state.maxIdQuery
      );

      nextState.minIdQuery = nextMinIdQuery;
      nextState.result = nextResult;
      return nextState;
    }
    case "changed_maxIdQuery": {
      const nextState = { ...state };
      const nextMaxIdQuery = action.maxIdQuery;

      const nextResult = filterByAll(
        state.ids,
        state.query,
        state.minIdQuery,
        nextMaxIdQuery
      );

      nextState.maxIdQuery = nextMaxIdQuery;
      nextState.result = nextResult;
      return nextState;
    }
    default: {
      return { ...state };
    }
  }
};

export const useSearchId = (ids: Id[]) =>
  useReducer(reducer, {
    query: "",
    minIdQuery: "",
    maxIdQuery: "",
    result: [],
    ids: ids,
  });
