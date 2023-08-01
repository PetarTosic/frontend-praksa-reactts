import { createContext } from "react";

const UserContext = createContext({
  user: {},
  loggedIn: false,
  logInUser: (user: object) => {},
  logOutUser: () => {},
});

export default UserContext;