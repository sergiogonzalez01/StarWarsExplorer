import { useCharacterImage } from "../hooks/useCharacterImage";
import { useSelectedCharacter } from "../hooks/useSelectedCharacter";
import { ImageCharacter } from "./ImageCharacter";

export function Card({ name, id }) {
  const { srcImage } = useCharacterImage({ id });
  const { updateSelected } = useSelectedCharacter();
  return (
    <div
      className="rounded-lg bg-black/75 w-56 h-fit cursor-pointer border-2 border-amber-600 p-1"
      onClick={() => updateSelected({ name, srcImage })}
    >
      <ImageCharacter
        src={srcImage}
        alt={name}
        imgClass="h-52 w-full object-contain bg-black"
      />

      <div className="p-2 h-20 flex items-center justify-center">
        <h5 className="capitalize text-center text-xl font-bold text-amber-400">
          {name}
        </h5>
      </div>
    </div>
  );
}
