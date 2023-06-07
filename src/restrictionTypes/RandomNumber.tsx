type RandomNumberType = {
    value: number;
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean;
    isNegative?: never;
    isZero?: never;
}

type NegativeNumber = RandomNumberType & {
    isNegative: boolean;
    isPositive?: never;
    isZero?: never;
}

type Zero = RandomNumberType & {
    isZero: boolean;
    isPositive?: never;
    isNegative?: never;
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <p>{value}</p>
      <p>{isPositive && "Number is positive"}</p>
      <p>{isNegative && "Number is negative"}</p>
      <p>{isZero && "Number is zero"}</p>
    </div>
  );
};
