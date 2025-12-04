import { useState } from "react";

export const useRegisterViewModel = () => {
  const [userData, setUserData] = useState({
    name: "Pedro",
  });

  return {
    userData,
    setUserData,
  };
};
