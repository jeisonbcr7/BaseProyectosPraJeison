function useContador(setContador) {
  function handleIncrement() {
    setContador((prev) => prev + 1);
  }

  function handleDecrement() {
    setContador((prev) => prev - 1);
  }

  return { handleIncrement, handleDecrement };
}

export default useContador;