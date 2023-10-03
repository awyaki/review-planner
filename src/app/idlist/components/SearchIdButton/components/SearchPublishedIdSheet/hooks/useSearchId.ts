import { Reducer, useReducer } from "react";
import { Id as _Id } from "@/db";

type Id = Required<_Id>;

type State = {
  query: string;
  place: string;
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
    }
  | {
      type: "changed_place";
      place: string;
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

const filterByPlace = (ids: Id[], place: string): Id[] => {
  return place === "" ? [...ids] : ids.filter((id) => id.place === place);
};

const filterByAll = (
  ids: Id[],
  query: string,
  min: string,
  max: string,
  place: string
) => {
  if (query === "" && min === "" && max === "" && place === "") return [];
  const filtered1 = filterByQuery(ids, query);
  const filtered2 = filterByMinId(filtered1, min);
  const filtered3 = filterByMaxId(filtered2, max);
  const filtered4 = filterByPlace(filtered3, place);
  return filtered4;
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
        state.maxIdQuery,
        state.place
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
        state.maxIdQuery,
        state.place
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
        nextMaxIdQuery,
        state.place
      );

      nextState.maxIdQuery = nextMaxIdQuery;
      nextState.result = nextResult;
      return nextState;
    }
    case "changed_place": {
      const nextState = { ...state };
      const nextPlace = action.place;
      const nextResult = filterByAll(
        state.ids,
        state.query,
        state.minIdQuery,
        state.maxIdQuery,
        nextPlace
      );

      nextState.place = nextPlace;
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
    place: "",
    minIdQuery: "",
    maxIdQuery: "",
    result: [],
    ids: ids,
  });
