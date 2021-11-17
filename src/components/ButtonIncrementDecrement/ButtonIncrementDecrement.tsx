import { memo } from "react";

interface Props {
  handleDecrement: (id: string) => void;
  handleIncrement: (id: string) => void;
  value: number;
  id: string;
}

export default memo(function ButtonIncrementDecrement({
  handleIncrement,
  handleDecrement,
  value,
  id,
}: Props) {
  return (
    <div>
      <button onClick={() => handleDecrement(id)}>-</button>
      {value}
      <button onClick={() => handleIncrement(id)}>+</button>
    </div>
  );
});
