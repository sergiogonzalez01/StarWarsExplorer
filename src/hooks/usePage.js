import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useCharacters } from "./useCharacters";

export function usePage() {

  const [searchParams, setSearchParams] = useSearchParams();
  const { characters, loading } = useCharacters();
  const [page, setPage] = useState(1);
  const hasNext = Boolean(characters?.next);
  const hasPrev = Boolean(characters?.previous);

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

  useEffect(() => {
    const currentPage = parseInt(searchParams.get('page'));
    setPage(currentPage || 1);
  }, [searchParams])

  return { page, hasNext, hasPrev, nextPage, previousPage }
}