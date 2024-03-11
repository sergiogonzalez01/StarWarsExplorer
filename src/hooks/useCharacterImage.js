import { useEffect, useState } from "react";
import { getImageCharacter } from "../services/Character";
import { useParams } from "react-router-dom";



export function useCharacterImage({ id }) {
  const [srcImage, setSrcImage] = useState("");
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    const path = `${category}/${id}.png`;
    getImageCharacter({ path }).then((url) => {
      setSrcImage(url)
    }).finally(() => setLoading(false))

  }, [id])

  return { srcImage, loading }
}