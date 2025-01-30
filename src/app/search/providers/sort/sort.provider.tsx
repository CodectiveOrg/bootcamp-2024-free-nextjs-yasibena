"use client";

import { SortType } from "@/types/sort.type";
import { Dispatch, PropsWithChildren, ReactElement, useReducer } from "react";
import { SortAction, sortReducer } from "../../reducers/sort.reducer";
import { createContext } from "react";

type Value = {
  sortBy: SortType;
  dispatchSort: Dispatch<SortAction>;
};

export const SortContext = createContext<Value>({
  sortBy: { sortBy: "" },
  dispatchSort: () => {},
});

type Props = PropsWithChildren & {
  defaultSortBy: SortType;
};

export default function SortProvider({
  children,
  defaultSortBy,
}: Props): ReactElement {
  const [sortBy, dispatchSort] = useReducer(sortReducer, defaultSortBy);

  return (
    <SortContext.Provider value={{ sortBy, dispatchSort }}>
      {children}
    </SortContext.Provider>
  );
}
