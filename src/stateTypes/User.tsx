import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  // the user variable can either hold an object of type AuthUser or the value null; this is called a union type. By using the union type AuthUser | null, you can assign an object of type AuthUser to user when a user is authenticated. Alternatively, you can assign null to user when the user is not authenticated or when the user's data is not available.
    const [user, setUser] = useState<AuthUser | null>(null);

  //you can also do type assertion; The type assertion {} as AuthUser is used to provide an initial value for the state. It tells TypeScript to consider the empty object {} as an instance of AuthUser.
//   const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Raymond",
      email: "ray@user.dev",
    });
  };
  const handleLogout = () => {
    setUser(null);
    // setUser({} as AuthUser);
  };

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
      {/* <div>User name is {user.name}</div>
      <div>User email is {user.email}</div> */}
    </div>
  );
};
