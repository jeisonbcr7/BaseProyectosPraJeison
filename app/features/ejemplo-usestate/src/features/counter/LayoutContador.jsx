import { useState } from "react";
import Contador1 from "./contador1/contador1";
import Contador2 from "./contador2/contador2";

export function LayoutContador() {
  const [contador, setContador] = useState(0);
  return (
    <>
        <Contador1 count={contador} setCount={setContador} />
        <Contador2 count={contador} setCount={setContador} />   
    </>
  );
}