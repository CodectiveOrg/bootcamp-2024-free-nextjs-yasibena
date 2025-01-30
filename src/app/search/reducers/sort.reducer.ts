import { SortType } from "@/types/sort.type";

export type SortAction = {
  type: string;
  sortBy?: string | number;
};

export function sortReducer(state: SortType, action: SortAction): SortType {
  switch (action.type) {
    case "updated_sorting": {
      return { ...state, sortBy: action.sortBy || state.sortBy };
    }
    default:
      return state;
  }
}
