import { useContext, useRef, useState } from "react";
import { Context } from "../context/GlobalContext";
import { getCharacters } from "../services/Character";
import { useNavigate, useSearchParams } from "react-router-dom";

export function useCharacters() {
  const { characters, setCharacters, loading, setLoading } = useContext(Context);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const previousValues = useRef({ search: '', category: 'people' })
  const prev = useRef(null);
  const navigate = useNavigate();

  const updateCharacters = async ({ url = null, search = null, page = 1, category = 'people' } = {}) => {

    if (prev.current && prev.current.signal) prev.current.abort("Another fetch");
    prev.current = new AbortController();
    const abort = prev.current;

    try {
      previousValues.current = { search, category };
      setError(false)
      setLoading(true)
      const data = await getCharacters({ url, search, page, category, signal: prev.current.signal });
      if (!data.results?.length) throw Error("Error, not results");
      setCharacters(data);
    }
    catch (err) {
      console.error(err.message);
      if (!abort.signal.aborted) {
        setError(true);
        setCharacters({});
      }
    } finally {
      if (!abort.signal.aborted) setLoading(false);
    }
  }

  const nextPage = () => {
    if (characters.next && !loading) {
      const page = parseInt(searchParams.get('page'));
      searchParams.set('page', page ? page + 1 : 2);
      setSearchParams(searchParams)
    }
  };

  const previousPage = () => {
    if (characters.previous && !loading) {
      const page = parseInt(searchParams.get('page'));
      searchParams.set('page', page - 1);
      setSearchParams(searchParams)
    }
  };

  const searchCharacters = ({ search, category }) => {
    if (previousValues.current.search === search && previousValues.current.category === category) return;
    const count = search.trim().length;
    if (count && search) navigate(`/search/${category}?q=${search}`)
    else navigate(`/search/${category}`)
  }

  return { characters, loading, error, nextPage, previousPage, searchCharacters, updateCharacters }
}