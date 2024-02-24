import { Dispatch, createContext } from "react";
import { AuthAction } from "./authReducer";

interface IAuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

export const AuthContext = createContext<IAuthContextType>(
  {} as IAuthContextType
);
