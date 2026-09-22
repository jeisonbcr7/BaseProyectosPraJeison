import { useState } from "react";
import useLogin from "./hook/useLogin";
import { LOGIN_TEXT } from "./constants/login.constants";

export function LayoutLogin() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [contador, setContador] = useState(0);

  const { handleUserChange, handlePasswordChange, handleLogin } =
    useLogin(setUsuario, setPassword, setContador);

  return (
    <form onSubmit={handleLogin}>
      <h2>{LOGIN_TEXT.TITLE}</h2>

      <p>Contador: {contador}</p>

      <input
        type="text"
        value={usuario}
        onChange={handleUserChange}
        placeholder={LOGIN_TEXT.USERNAME}
      />

      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder={LOGIN_TEXT.PASSWORD}
      />

      <button type="submit">{LOGIN_TEXT.LOGIN}</button>
    </form>
  );
}
