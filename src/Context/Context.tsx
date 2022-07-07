import { createContext, useState } from "react";

type AppRefContextProviderProps = {
  children: React.ReactNode;
};

type AppRefContextType = {
  componentinView: boolean;
  setComponentinView: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppRefContext = createContext<AppRefContextType | true>(true);

export const AppRefContextProvider = ({
  children,
}: AppRefContextProviderProps) => {
  const [componentinView, setComponentinView] = useState(true);
  return (
    <AppRefContext.Provider value={{ componentinView, setComponentinView }}>
      {children}
    </AppRefContext.Provider>
  );
};
