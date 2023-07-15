import { createContext } from "react";

export const BrowserRouterContext = createContext({});

export const BrowserRouter = ({ browserContext, children }) => {
  let { pathname } = window.location;
  console.log({ pathname });
  return (
    <BrowserRouterContext.Provider value={browserContext}>
      {children}
    </BrowserRouterContext.Provider>
  );
};
