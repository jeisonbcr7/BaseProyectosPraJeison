import {CONTADOR_TEXT} from "../constants/contador.constants";
import useContador from "../hooks/useContador";

export default function Contador1({ count, setCount }) {
  const { handleIncrement, handleDecrement } = useContador(setCount);

  return (
    <>
      <h2>{CONTADOR_TEXT.COUNTER}</h2>
      <p>{count}</p>
      <button onClick={count <5 && handleIncrement}>{CONTADOR_TEXT.INCREMENT}</button>
      <button onClick={count > 0? handleDecrement: null} > {CONTADOR_TEXT.DECREMENT}
      </button>
    </>
  );
}
