type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${VerticalPosition}-${HorizontalPosition}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <p>Toast notification position - {position}</p>
    </div>
  );
};
