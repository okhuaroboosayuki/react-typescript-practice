type InputProps = React.ComponentProps<"input">;

export const Inputs = (props: InputProps) => {
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <input {...props} />
    </div>
  );
};
