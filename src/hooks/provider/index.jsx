import { createContext, useContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "HEADER":
      return {
        ...state,
        header: !state.header,
      };
    case "OPTIONTEXT":
      return {
        ...state,
        optionText: action.text,
      };
  }
};
const ValueContext = createContext();
const ActionContext = createContext();
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    header: false,
    optionText: "전체",
  });
  return (
    <>
      <ActionContext.Provider value={dispatch}>
        <ValueContext.Provider value={state}>{children}</ValueContext.Provider>
      </ActionContext.Provider>
    </>
  );
};
export const useContextAction = () => {
  const action = useContext(ActionContext);
  if (action === undefined) {
    throw new Error("formAction error");
  }
  return action;
};
export const useContextValue = () => {
  const value = useContext(ValueContext);
  if (value === undefined) {
    throw new Error("formAction error");
  }
  return value;
};
