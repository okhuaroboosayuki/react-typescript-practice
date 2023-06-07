import { useContext } from "react";
import { UserContext } from "./UserContext";

export const Userr = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({ name: "Raymond", email: "ray@user.dev" });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      <div>User name is {userContext.user?.name} </div>
      <div>User email is {userContext.user?.email} </div>
    </div>
  );
};
