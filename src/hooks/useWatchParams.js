import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export function useWatchParams({ updateCharacters }) {
  const [searchParams] = useSearchParams();
  const { category } = useParams();
  const navigate = useNavigate();
  const searchParam = searchParams.get('q') || "";

  useEffect(() => {
    if (category) {
      const page = parseInt(searchParams.get('page'));
      const q = searchParams.get('q')

      if (page || q) updateCharacters({ search: q, page: page || 1, category });
      else updateCharacters({ category });
    }
    else {
      navigate("people");
    }
  }, [searchParams, category]);

  return { categoryParam: category, searchParam }
}