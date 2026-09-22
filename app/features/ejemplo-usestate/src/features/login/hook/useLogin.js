export default function useLogin(setUsuario, setPassword, setContador) {
  const handleUserChange = (event) => {
    setUsuario(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (setContador) {
      setContador((prev) => prev + 1);
    }
  };

  return {
    handleUserChange,
    handlePasswordChange,
    handleLogin,
  };
}