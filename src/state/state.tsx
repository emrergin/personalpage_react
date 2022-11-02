import React, { createContext, useContext, useReducer } from "react";
import { Book, Website, Drawer } from '../types';

import { Action } from "./reducer";

export type State = {
  books: Book[];
  affiliations : Drawer[];
  articles : Drawer[];
  collaborations: Book[];
  translations: Book[];
  websites: Website[];
  isTurkish: boolean;
};

const initialState: State = {
  books: [],
  affiliations : [],
  articles : [],
  collaborations: [],
  translations: [],
  websites: [],
  isTurkish: false
};

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState
]);

type StateProviderProps = {
  reducer: React.Reducer<State, Action>;
  children: React.ReactElement;
};

export const StateProvider = ({
  reducer,
  children
}: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
