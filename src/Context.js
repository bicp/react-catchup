const { createContext } = require("react");

export const ExampleContext = createContext();

export function ExampleContextProvider({ children }) {
  const value = {
    user: {
      email: "a@a.com",
    },
  };
  return (
    <ExampleContext.Provider value={value}>{children}</ExampleContext.Provider>
  );
}
