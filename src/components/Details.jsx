import { titles } from "../json/titles";
import { ImageCharacter } from "./ImageCharacter";

export function Details({ selected, updateSelected, category }) {
  const heightClass = "h-[90%] max-h-[700px] md:max-h-[650px] ";
  const widthClass = "w-[90%] max-w-[400px] md:max-w-[1000px] ";

  const clickBackground = (e) => e.target.id === "back" && updateSelected();

  return (
    <div
      id="back"
      className="bg-black/60 fixed top-0 flex justify-center items-center h-dvh w-dvw backdrop-blur-[2px]"
      onClick={clickBackground}
    >
      <div
        className={`flex flex-col md:flex-row rounded-md relative bg-black overflow-hidden border-2 border-slate-700 ${heightClass} ${widthClass}`}
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
              {titles[category].map((title) => {
                const propName = title.split(" ").join("_");
                return (
                  <li
                    className="text-slate-700 w-fit h-fit font-bold capitalize text-center md:text-start"
                    key={title}
                  >
                    <p className="text-lg md:text-xl">{title}: </p>
                    <span
                      className={`block text-slate-500 font-medium text-base md:text-lg rounded-md min-w-[100px]`}
                    >
                      {`> ${selected[propName]}`}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
