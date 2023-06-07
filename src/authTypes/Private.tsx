import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  return isLoggedIn ? <Component name="Osayuki" /> : <Login />;
};
