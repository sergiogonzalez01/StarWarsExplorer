import React, { useState } from "react";

export const Context = React.createContext();

export function GlobalContextProvider({ children }) {
  const [characters, setCharacters] = useState({});
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  const obj = {
    characters,
    setCharacters,
    loading,
    setLoading,
    selected,
    setSelected,
  };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}
