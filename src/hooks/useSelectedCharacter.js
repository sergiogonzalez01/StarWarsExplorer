import { useContext, useEffect } from "react";
import { Context } from "../context/GlobalContext";

export function useSelectedCharacter() {
  const { selected, setSelected, characters } = useContext(Context);

  const updateSelected = ({ name = null, srcImage = null } = {}) => {
    if (name && srcImage) {
      const character = characters.results.find(character => character.name === name);
      setSelected({ ...character, srcImage });
    } else {
      setSelected(null);
    }
  }

  useEffect(() => {
    setSelected(null);
  }, [history.state])

  return { selected, updateSelected }
}