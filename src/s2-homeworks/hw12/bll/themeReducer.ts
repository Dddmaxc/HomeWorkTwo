type ThemeStateType = {
  themeId: number;
}

const initState: ThemeStateType = {
  themeId: 1,
};

export const changeThemeId = (id: number) => ({
  type: "SET_THEME_ID" as const,
  id,
});

type ChangeThemeActionType = ReturnType<typeof changeThemeId>;

type ActionType = ChangeThemeActionType;

export const themeReducer = (
  state: ThemeStateType = initState,
  action: ActionType
): ThemeStateType => {
  switch (action.type) {
    case "SET_THEME_ID":
      return { ...state, themeId: action.id };
    default:
      return state;
  }
};
