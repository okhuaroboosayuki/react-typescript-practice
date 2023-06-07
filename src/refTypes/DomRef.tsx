import { useRef, useEffect } from "react";

export const DomRef = () => {
  // This line declares a ref variable called inputRef using the useRef hook. The generic parameter <HTMLInputElement> specifies that the ref is intended for an <input> element.
  // This is for Dom reference types
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <input ref={inputRef} type="text" />
    </div>
  );
};
