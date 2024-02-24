interface ILogin {
  type: "LOGIN";
  username: string;
}

interface ILogout {
  type: "LOGOUT";
}

export type AuthAction = ILogin | ILogout;

const authReducer = (user: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return user;
};

export default authReducer;
