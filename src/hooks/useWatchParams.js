import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export function useWatchParams({ updateCharacters }) {
  const [searchParams] = useSearchParams();
  const { category } = useParams();
  const searchParam = searchParams.get('q') || "";

  useEffect(() => {
    const cat = category === 'people' ? 'peoples' : category;
    const page = parseInt(searchParams.get('page'));
    const q = searchParams.get('q')

    if (page || q) updateCharacters({ search: q, page: page || 1, category: cat });
    else updateCharacters({ category: cat });
  }, [searchParams, category]);

  return { categoryParam: category, searchParam }
}