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
    <div>
      <div className="p-5">
        <ul className="flex align-middle lg:justify-center gap-5 overflow-y-auto no-scrollbar p-5">
          {highestReadingSurahs.map((surah) => (
            <li key={surah.id}>
              <NavLink
                className="border flex gap-1 border-green-900 text-primaryHover rounded-full text-lg px-6 py-1 hover:bg-primary hover:text-textWhite transition hover:border-transparent"
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
