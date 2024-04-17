import { ImageCharacter } from "./ImageCharacter";
import Titles from "../assets/Titles.json";

export function Details({ selected, updateSelected, category }) {
  const heightClass = "h-[90%] max-h-[700px] md:max-h-[650px] ";
  const widthClass = "w-[90%] max-w-[400px] md:max-w-[1000px] ";

  const clickBackground = (e) => e.target.id === "back" && updateSelected();

  console.log(selected);
  return (
    <div
      id="back"
      onClick={clickBackground}
      className="bg-black/40 fixed top-0 flex justify-center items-center h-dvh w-dvw backdrop-blur-[2px]"
    >
      <div
        className={`flex flex-col md:flex-row rounded-md relative bg-black overflow-hidden animate-[modalScale_0.2s_forwards] ${heightClass} ${widthClass}`}
      >
        <ImageCharacter
          src={selected.srcImage}
          alt={selected.name}
          imgClass="object-contain w-full md:w-[60%] h-1/2 md:h-full m-auto"
        />

        <div className="flex flex-col bg-gray-100  w-full md:w-[40%] h-1/2 md:h-full">
          <div className="flex items-center justify-center md:justify-between gap-2 px-4 py-3 border-b border-gray-200 ">
            <h2 className="font-bold text-center capitalize text-xl md:text-2xl text-gray-800 overflow-hidden  text-ellipsis text-nowrap max-w-full">
              {selected.name}
            </h2>

            <button
              type="button"
              className="flex items-center justify-center absolute md:static top-3 right-3"
              onClick={() => updateSelected()}
            >
              <i className="fa-solid fa-xmark flex h-9 justify-center items-center text-5xl md:text-4xl text-red-500"></i>
            </button>
          </div>

          <div
            className="h-full my-4 md:my-6 overflow-y-auto"
            style={{ scrollbarWidth: "thin" }}
          >
            <ul className="flex flex-col gap-2 w-full h-full px-4 items-center  md:items-start">
              {Titles[category].map((title) => (
                <li
                  key={title.title}
                  className="text-slate-700 w-fit h-fit font-bold text-center md:text-start"
                >
                  <p className="text-lg md:text-xl">{title.title}: </p>

                  <span className="capitalize block text-slate-500 font-medium text-base md:text-lg rounded-md min-w-[100px]">
                    {`${selected[title.propName]}`}{" "}
                    <span className="normal-case">{title.additionalText}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
