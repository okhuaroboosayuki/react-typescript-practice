type ContainerProps = {
  // this is how to declare css styles props in typescript
  styles: React.CSSProperties;
};

export const Container = (props: ContainerProps) => {
  return <div style={props.styles}>This is container content</div>;
};
