import { NavLink } from "react-router-dom";

const SuggestedSurah = () => {
  const highestReadingSurahs = [
    {
      id: "55",
      name1: "আর",
      name2: "রহমান",
    },
    {
      id: "18",
      name1: "আল",
      name2: "কাহফ",
    },
    {
      id: "36",
      name1: "ইয়াসিন",
      name2: "",
    },
    {
      id: "56",
      name1: "আল",
      name2: "ওয়াকিয়াহ",
    },
    {
      id: "67",
      name1: "আল",
      name2: "মুলক",
    },
  ];

  return (
    <div className="font-thin px-10 lg:p-0">
      <div>
        <ul className="flex align-middle lg:justify-center gap-5 overflow-y-auto no-scrollbar">
          {highestReadingSurahs.map((surah) => (
            <li key={surah.id}>
              <NavLink
                className="border flex gap-1 border-gray-400 rounded-full text-lg px-6 py-1 hover:bg-secondary hover:text-textWhite transition hover:border-transparent"
                to={`/singleSurah/${surah.id}`}
              >
                <div className="flex flex-nowrap">
                  <p>{surah.name1}&nbsp;</p>
                  <p>{surah.name2}</p>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SuggestedSurah;
