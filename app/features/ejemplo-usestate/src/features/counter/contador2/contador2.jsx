import useContador from "../hooks/useContador";


export default function Contador2({ count, setCount }) {
  const { handleDecrement } = useContador(setCount);

  return (
    <>
      <h2>Contador 2</h2>
      <p>{count}</p>
      <button onClick={handleDecrement} disabled={count <= 0}>
        Decrementar
      </button>
    </>
  );
}