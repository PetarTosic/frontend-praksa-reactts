import { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }: any) => {
  const [userState, setUserState] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const logInUser = (user: object) => {
    setUserState(user);
    setIsUserLoggedIn(true);
  };

  const logOutUser = () => {
    setUserState({});
    setIsUserLoggedIn(false);
  };

  const userContext = {
    user: userState,
    loggedIn: isUserLoggedIn,
    logInUser,
    logOutUser,
  };
  
  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};

export default UserProvider;