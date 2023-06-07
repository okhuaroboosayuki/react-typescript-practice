import Greet from "../componentsTypes/Greet";

// you can use a type props you don't have access to by doing this:

export const CustomComponents = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>;
};
