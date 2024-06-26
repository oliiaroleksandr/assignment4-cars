import { createContext, useContext } from "react";
import { useLocalStorage } from "@/shared/hooks";

type ContextValue = {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

const Context = createContext<ContextValue | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage(
    "isAuthenticated",
    false
  );

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </Context.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};
