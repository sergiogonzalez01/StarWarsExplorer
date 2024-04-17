import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useCharacters } from "./useCharacters";

export function useWatchParams() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get('q') || "";
  const { updateCharacters, clearCharacters } = useCharacters();

  useEffect(() => {
    const cat = category === 'people' ? 'peoples' : category;
    const page = parseInt(searchParams.get('page'));
    const q = searchParams.get('q')

    if (page || q) updateCharacters({ search: q, page: page || 1, category: cat });
    else updateCharacters({ category: cat });

    return () => clearCharacters();
  }, [searchParams, category]);

  return { categoryParam: category, searchParam }
}