import { useState } from "react";

export const LoginCard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
  );
};