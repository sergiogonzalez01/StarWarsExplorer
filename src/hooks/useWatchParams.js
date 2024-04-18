import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useCharacters } from "./useCharacters";

export function useWatchParams() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get('q') || "";
  const { updateCharacters } = useCharacters();

  useEffect(() => {
    const cat = category === 'people' ? 'peoples' : category;
    const page = parseInt(searchParams.get('page'));

    if (page || searchParam) updateCharacters({ search: searchParam, page: page || 1, category: cat });
    else updateCharacters({ category: cat });
  }, [searchParams, category]);

  return { categoryParam: category, searchParam }
}