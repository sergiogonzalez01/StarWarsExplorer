import { useContext, useRef } from "react";
import { Context } from "../context/GlobalContext";
import { getCharacters } from "../services/Character";
import { useNavigate } from "react-router-dom";

export function useCharacters({ prevSearch, prevCategory } = {}) {
  const { characters, setCharacters, loading, setLoading } = useContext(Context);
  const prevSignal = useRef(null);
  const navigate = useNavigate();

  const updateCharacters = async ({ url = null, search = null, page = 1, category = 'characters' } = {}) => {
    category = category === 'characters' ? 'people' : category;

    if (prevSignal.current && prevSignal.current.signal) prevSignal.current.abort("Another fetch");
    prevSignal.current = new AbortController();
    const abort = prevSignal.current;

    try {
      setLoading(true)
      const data = await getCharacters({ url, search, page, category, signal: prevSignal.current.signal });
      setCharacters(data);
    }
    catch (err) {
      if (!abort.signal.aborted) setCharacters({})
    } finally {
      if (!abort.signal.aborted) setLoading(false);
    }
  }

  const searchCharacters = ({ search, category }) => {
    if (prevSearch === search && prevCategory === category) return;
    const count = search.trim().length;
    if (count && search) navigate(`/search/${category}?q=${search}`)
    else navigate(`/search/${category}`)
  }

  const clearCharacters = () => {
    setCharacters(null)
  }

  return { characters, loading, searchCharacters, updateCharacters, clearCharacters }
}