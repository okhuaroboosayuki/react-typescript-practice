import { useState, useRef, useEffect } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);

  //   this is for mutable reference types. mutable means changeable
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current);
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <div>HookTimer - {timer} -</div>
      <div>
        <button onClick={() => stopTimer()}>Stop Timer</button>
      </div>
    </div>
  );
};
