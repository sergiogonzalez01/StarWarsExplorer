import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function usePage() {

  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const currentPage = parseInt(searchParams.get('page'));
    setPage(currentPage || 1);
  }, [searchParams])

  return { page }
}