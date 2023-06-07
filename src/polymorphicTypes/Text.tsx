type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <Component
      style={{ border: "1px solid black", padding: "20px" }}
      className={`class-with-${size}-${color}`}
    >
      {children}
    </Component>
  );
};

// The code you provided defines a Text component that accepts generic type E, which represents the element type that the Text component will render. The component has several props defined:

// size?: "sm" | "md" | "lg": An optional prop that specifies the size of the text. It can have one of the three values: "sm", "md", or "lg".
// color?: "primary" | "secondary": An optional prop that specifies the color of the text. It can have one of the two values: "primary" or "secondary".
// children: React.ReactNode: The required prop that represents the content of the Text component. It can be any valid React node.
// as?: E: An optional prop that allows specifying a custom element type to be used instead of the default "div" element.
// The TextProps type is defined as a combination of TextOwnProps<E> and Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>. Here's what these types mean:

// TextOwnProps<E> represents the props that are specific to the Text component, including size, color, children, and as.
// React.ComponentProps<E> represents the props of the specified element type E. It provides all the standard props that the element can accept.
// Omit<React.ComponentProps<E>, keyof TextOwnProps<E>> removes the props defined in TextOwnProps<E> from the props of the specified element type E. It ensures that only the specific Text component props are used and any conflicting props are excluded.
// Finally, the Text component is defined as a function component that takes in the props of type TextProps<E>. Inside the component, the Component variable is determined based on the as prop or defaults to "div" if not provided. The component is then rendered using the Component variable, and the style and className props are applied based on the size and color values.

// By using this Text component, you can render text with customizable size, color, and element type, while still allowing other standard props that the specified element type accepts.