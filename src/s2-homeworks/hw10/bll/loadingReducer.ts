type LoadingActionType = {
  type: "CHANGE_LOADING";
  isLoading: boolean;
};

type initStateType = {
  isLoading: boolean;
};
const initState: initStateType = {
  isLoading: false,
};

type ActionType = LoadingActionType;

export const loadingReducer = (state = initState, action: ActionType): initStateType => {
  switch (action.type) {
    case "CHANGE_LOADING": {
      return { ...state, isLoading: action.isLoading };
    }
    // пишет студент  // need to fix
    default:
      return state;
  }
};

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
  type: "CHANGE_LOADING",
  isLoading,
});
